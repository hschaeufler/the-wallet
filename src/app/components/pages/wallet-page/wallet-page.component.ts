import { Component, OnDestroy, OnInit } from '@angular/core';
import { DocumentStoreService } from '../../../store/document-store.service';
import { DocumentModel } from '../../../models/Document.model';
import { CameraService } from '../../../modules/camera-module/services/camera.service';
import { concatMap, map, tap, Subscription, skipWhile, from } from 'rxjs';
import { CovidCertificateService } from '../../../modules/health-certificate/services/covid-certificate.service';
import { SortStoreService } from '../../../store/sort-store.service';
import { CameraDialogService } from '../../../modules/camera-module/services/camera-dialog.service';
import { Router } from '@angular/router';
import { mapCertificateWrapperToDocumentModel } from './map-certificate-wrapper-to-document-model.utils';
import { ActionMenuSheetService } from '../../../modules/ui-components/services/action-menu-sheet.service';
import { ActionListItemModel } from '../../../modules/ui-components/ActionListItem.model';
import { FileSystemService } from '../../../modules/file-system/services/file-system.service';
import { UserMessageService } from '../../../modules/ui-components/services/user-message.service';
import { QrcodeReaderService } from '../../../modules/camera-module/services/qrcode-reader.service';
import { blobToImageData } from './image-conversion.utils';
import { OverlayService } from '../../../modules/ui-components/services/overlay.service';

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
    <button
      (click)="openActionMenu()"
      mat-fab
      color="primary"
      aria-label="QR_Code"
    >
      <mat-icon>add</mat-icon>
    </button>
  `,
  styleUrls: ['./wallet-page.component.scss'],
})
export class WalletPageComponent implements OnInit, OnDestroy {
  documentList: DocumentModel[] = [];
  sortOrder: string[] = [];
  documentChangeSubscription?: Subscription;
  sortOrderSubscription?: Subscription;

  actionList: ActionListItemModel[] = [
    {
      matIcon: 'qr_code_scanner',
      name: 'Scan Health Certificate',
      action: () => {
        this.openCameraDialog();
      },
    },
    {
      matIcon: 'file_upload',
      name: 'Import Health Certificate',
      action: () => {
        this.importImage();
      },
    },
  ];

  constructor(
    private documentStore: DocumentStoreService,
    private cameraService: CameraService,
    private certificateService: CovidCertificateService,
    private sortService: SortStoreService,
    private cameraDialogService: CameraDialogService,
    private router: Router,
    private actionMenuSheetService: ActionMenuSheetService,
    private fileSystemService: FileSystemService,
    private userMessageService: UserMessageService,
    private qrcodeReaderService: QrcodeReaderService,
    private overlayService: OverlayService
  ) {}

  ngOnInit(): void {
    this.documentStore.getDocuments().subscribe({
      //Reassign Array so Angular will detect a change and redraw UI
      next: (value) => (this.documentList = [...this.documentList, value]),
      error: (err) => this.userMessageService.showErrorMessage(err),
    });
    //Subscribe for changed Documents
    this.documentChangeSubscription =
      this.documentStore.documentChange$.subscribe((documentModelChange) => {
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
    this.sortOrderSubscription = this.sortService.sortOrder$.subscribe(
      (sortOrder) => {
        this.sortOrder = sortOrder;
      }
    );
  }

  openActionMenu() {
    this.actionMenuSheetService.open(this.actionList);
  }

  importImage() {
    this.actionMenuSheetService.close();
    this.overlayService.openEmptyOverlay();
    this.fileSystemService
      .readfile()
      .pipe(
        tap(() => this.overlayService.openSpinnerOverlay()),
        concatMap((image) => blobToImageData(image)),
        concatMap((imageData) =>
          from(this.qrcodeReaderService.detectImage(imageData))
        ),
        map((qrCode) => {
          if (!qrCode || qrCode.length < 1) {
            throw new DOMException('No Valid QR-Code!');
          }
          return qrCode;
        }),
        // @ts-ignore
        concatMap((qrCode) => this.certificateService.decode(qrCode[0].value)),
        map((certificateWrapper) =>
          mapCertificateWrapperToDocumentModel(certificateWrapper)
        ),
        concatMap((document) => this.documentStore.saveDocument(document)),
        tap(() => {
          this.overlayService.close();
        })
      )
      .subscribe({
        next: (value) => console.log(value),
        error: (err) => {
          this.overlayService.close();
          this.userMessageService.showErrorMessage(err);
        },
      });
  }

  openCameraDialog() {
    this.actionMenuSheetService.close();
    this.cameraDialogService
      .openQRCodeScannerDialog()
      .afterClosed()
      .pipe(
        skipWhile((qrCode) => !qrCode),
        // @ts-ignore
        concatMap((qrCode) => this.certificateService.decode(qrCode.value)),
        map((certificateWrapper) =>
          mapCertificateWrapperToDocumentModel(certificateWrapper)
        ),
        concatMap((document) => this.documentStore.saveDocument(document))
      )
      .subscribe({
        error: (err) => this.userMessageService.showErrorMessage(err),
        complete: () => console.log('closed'),
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
    if (id) {
      this.documentStore.deleteDocument(id).subscribe({
        error: (err) => this.userMessageService.showErrorMessage(err),
      });
    }
  }

  onShowMore(id: string) {
    if (id) {
      this.router.navigate(['document', id]);
    }
  }
}
