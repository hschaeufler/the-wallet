import {ChangeDetectorRef, Component, DoCheck, IterableDiffer, IterableDiffers, OnDestroy, OnInit} from '@angular/core';
import {DocumentStoreService} from "../../../store/document-store.service";
import {DocumentModel} from "../../../models/Document.model";
import {CameraService} from "../../../modules/camera-module/services/camera.service";
import {concatMap, Observable, map, tap, Subscription} from "rxjs";
import {QRCodeModel} from "../../../modules/camera-module/services/QRCode.model";
import {CovidCertificateService} from "../../../modules/health-certificate/services/covid-certificate.service";
import {MatDialogRef} from "@angular/material/dialog";
import {CameraDialogComponent} from "../../../modules/camera-module/camera-dialog/camera-dialog.component";
import {mapCertificateWrapperToDocumentModel} from "./map-certificate-wrapper-to-document-model.utils";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {SortStoreService} from "../../../store/sort-store.service";

@Component({
  selector: 'the-wallet-wallet-page',
  template: `
    <the-wallet-page-template title="Wallet">
      <the-wallet-document-list
        [documentList]="documentList | sortDocumentsByArray: sortOrder"
        (sort)="onSort($event)"
      ></the-wallet-document-list>
    </the-wallet-page-template>
    <button (click)="openDialog()" mat-fab color="primary" aria-label="QR_Code">
      <mat-icon>qr_code</mat-icon>
    </button>
  `,
  styleUrls: ['./wallet-page.component.scss']
})
export class WalletPageComponent implements OnInit, OnDestroy {


  documentList: DocumentModel[] = [];
  sortOrder: string[] = [];
  qrCode$?: Observable<QRCodeModel>;
  cameraDialog?: MatDialogRef<CameraDialogComponent>;
  documentChangeSubscription?: Subscription;
  sortOrderSubscription?: Subscription;

  constructor(
    private documentStore: DocumentStoreService,
    private cameraService: CameraService,
    private certificateService: CovidCertificateService,
    private sortService: SortStoreService,
  ) {
  }

  ngOnDestroy(): void {
    if (this.documentChangeSubscription) {
      this.documentChangeSubscription.unsubscribe();
    }
    if (this.sortOrderSubscription) {
      this.sortOrderSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.documentStore.getDocuments().subscribe({
      //Reassign Array so Angular will detect a change and redraw UI
      next: value => this.documentList = [...this.documentList, value],
      error: err => console.error(err)
    })
    this.cameraService.qrCode$.pipe(
      tap(() => {
        if (this.cameraDialog) {
          this.cameraDialog.close();
        }
      }),
      concatMap(qrCode => this.certificateService.decode(qrCode.value)),
      map(certificateWrapper => mapCertificateWrapperToDocumentModel(certificateWrapper)),
      concatMap(document => this.documentStore.saveDocument(document)),
    ).subscribe({error: err => console.log(err)});
    //Subscribe for changed Documents
    this.documentChangeSubscription = this.documentStore.documentChange$.subscribe(documentModelChange => {
      console.log(documentModelChange);
      const index = this.documentList.findIndex(
        (document) => document.id === documentModelChange.id
      );
      //Must be an Update
      if (index != -1 && documentModelChange.document) {
        this.documentList[index] = documentModelChange.document;
        //Must be a Deletion
      } else if (index != -1) {
        this.documentList.splice(index, 1);
        //Must be a new Document
      } else if (documentModelChange.document) {
        this.documentList.push(documentModelChange.document);
      }
      //trigger redraw
      this.documentList = [...this.documentList];
    });
    this.sortService.getSortOrder().subscribe((sortOrder) => {
      this.sortOrder = sortOrder;
    });
    this.sortOrderSubscription = this.sortService.sortOrder$.subscribe((sortOrder) => {
      console.log(sortOrder);
      this.sortOrder = sortOrder;
    });
  }

  openDialog() {
    this.cameraDialog = this.cameraService.openCameraDialog();
  }


  onSort(sort: string[]) {
    this.sortService.updateSortOrder(sort).subscribe();
  }
}
