import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentStoreService} from "../../../store/document-store.service";
import {DocumentModel} from "../../../models/Document.model";
import {CameraService} from "../../../modules/camera-module/services/camera.service";
import {concatMap, Observable, map, tap, Subscription, skipWhile} from "rxjs";
import {QRCodeModel} from "../../../modules/camera-module/services/QRCode.model";
import {CovidCertificateService} from "../../../modules/health-certificate/services/covid-certificate.service";
import {MatDialogRef} from "@angular/material/dialog";
import {CameraDialogComponent} from "../../../modules/camera-module/camera-dialog/camera-dialog.component";
import {SortStoreService} from "../../../store/sort-store.service";
import {CameraDialogService} from "../../../modules/camera-module/services/camera-dialog.service";
import {Router} from "@angular/router";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {ActionMenuComponent} from "../../../modules/ui-components/components/molecules/action-menu/action-menu.component";
import {mapCertificateWrapperToDocumentModel} from "./map-certificate-wrapper-to-document-model.utils";
import {ActionMenuSheetService} from "../../../modules/ui-components/services/action-menu-sheet.service";
import {ActionListItemModel} from "../../../modules/ui-components/ActionListItem.model";

@Component({
  selector: 'the-wallet-wallet-page',
  template: `
    <the-wallet-page-template>
      <the-wallet-app-bar title="Wallet" theWalletPageTemplateHeader>
        <ng-container theWalletAppBarStartElements>
          <mat-icon>account_balance_wallet</mat-icon>
        </ng-container>
      </the-wallet-app-bar>
      <the-wallet-document-list
        [documentList]="documentList | sortDocumentsByArray: sortOrder"
        (sort)="onSort($event)"
        (delete)="onDelete($event)"
        (showMore)="onShowMore($event)"
      ></the-wallet-document-list>
    </the-wallet-page-template>
    <button (click)="openActionMenu()" mat-fab color="primary" aria-label="QR_Code">
      <mat-icon>add</mat-icon>
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

  actionList: ActionListItemModel[] = [
    {
      matIcon: "qr_code_scanner",
      name: "Scan Health Certificate",
      action: ()=>{ this.openDialog()}
    },
    {
      matIcon: "file_upload",
      name: "Import Health Certificate",
      action: ()=>{ this.openDialog()}
    },

  ]

  constructor(
    private documentStore: DocumentStoreService,
    private cameraService: CameraService,
    private certificateService: CovidCertificateService,
    private sortService: SortStoreService,
    private cameraDialogService: CameraDialogService,
    private router: Router,
    private actionMenuSheetService: ActionMenuSheetService
  ) {
  }

  ngOnInit(): void {
    this.documentStore.getDocuments().subscribe({
      //Reassign Array so Angular will detect a change and redraw UI
      next: value => this.documentList = [...this.documentList, value],
      error: err => console.error(err)
    })
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

  openActionMenu() {
    this.actionMenuSheetService.open(this.actionList);
  }

  openDialog() {
    this.cameraDialogService.openQRCodeScannerDialog()
      .afterClosed()
      .pipe(
        skipWhile(qrCode => !qrCode),
        // @ts-ignore
        concatMap(qrCode => this.certificateService.decode(qrCode.value)),
        map(certificateWrapper => mapCertificateWrapperToDocumentModel(certificateWrapper)),
        concatMap(document => this.documentStore.saveDocument(document)),
      ).subscribe({
      error: err => console.log(err),
      complete: () => console.log("closed"),
    });
  }

  onSort(sort: string[]) {
    this.sortService.updateSortOrder(sort).subscribe();
  }

  ngOnDestroy(): void {
    if (this.documentChangeSubscription) {
      this.documentChangeSubscription.unsubscribe();
    }
    if (this.sortOrderSubscription) {
      this.sortOrderSubscription.unsubscribe();
    }
  }

  onDelete(id: string) {
    if(id) {
      this.documentStore.deleteDocument(id).subscribe({
        error: err => console.log(err)
      });
    }
  }

  onShowMore(id: string) {
    if(id) {
      this.router.navigate(["document", id]);
    }
  }
}
