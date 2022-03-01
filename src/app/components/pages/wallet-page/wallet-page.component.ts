import {Component, OnInit} from '@angular/core';
import {DocumentStoreService} from "../../../store/document-store.service";
import {DocumentModel} from "../../../models/Document.model";
import {CameraService} from "../../../camera-module/services/camera.service";
import {concatMap, Observable, map, throwError, catchError, tap} from "rxjs";
import {QRCodeModel} from "../../../camera-module/services/QRCode.model";
import {CovidCertificateService} from "../../../health-certificate/services/covid-certificate.service";
import {MatDialogRef} from "@angular/material/dialog";
import {CameraDialogComponent} from "../../../camera-module/camera-dialog/camera-dialog.component";
import {mapCertificateWrapperToDocumentModel} from "./map-certificate-wrapper-to-document-model.utils";

@Component({
  selector: 'the-wallet-wallet-page',
  template: `
    <the-wallet-page-template>
      <the-wallet-document-list
        [documentList]="documentList"
      ></the-wallet-document-list>
    </the-wallet-page-template>
    <button (click)="openDialog()" mat-fab color="primary" aria-label="QR_Code">
      <mat-icon>qr_code</mat-icon>
    </button>
  `,
  styleUrls: ['./wallet-page.component.scss']
})
export class WalletPageComponent implements OnInit {



  documentList: DocumentModel[] = []
  qrCode$?: Observable<QRCodeModel>;
  cameraDialog?: MatDialogRef<CameraDialogComponent>;

  constructor(
    private documentStore: DocumentStoreService,
    private cameraService: CameraService,
    private certificateService: CovidCertificateService
  ) {}

  ngOnInit(): void {
    this.documentStore.getDocuments().subscribe({
      next: value => this.documentList.push(value),
      error: err => console.error(err)
    })
    this.cameraService.qrCode$.pipe(
      tap(()=> {
        if(this.cameraDialog) {
          this.cameraDialog.close();
        }
      }),
      concatMap(qrCode => this.certificateService.decode(qrCode.value)),
      map(certificateWrapper => mapCertificateWrapperToDocumentModel(certificateWrapper)),
      concatMap(document => this.documentStore.saveDocument(document)),
      //catchError(err => throwError(err)),
    ).subscribe({error: err => console.log(err)});

    //Subscribe for changed Documents
    this.documentStore.documentChange$.subscribe(documentModelChange => {
      const index = this.documentList.findIndex(
        (document)=> document.id === documentModelChange.id
      );
      //Must be an Update
      if(index != -1 && documentModelChange.document) {
        this.documentList[index] = documentModelChange.document;
      //Must be a Deletion
      } else if(index != -1) {
        delete this.documentList[index];
        //Must be a new Document
      } else if(documentModelChange.document) {
        this.documentList.push(documentModelChange.document);
      }
    });
  }

  openDialog() {
    this.cameraDialog = this.cameraService.openCameraDialog();
  }

}
