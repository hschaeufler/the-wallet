import { Component, OnDestroy, OnInit } from '@angular/core';
import { DocumentStoreService } from '../../../store/document-store.service';
import { DocumentModel } from '../../../models/Document.model';
import { CameraService } from '../../../modules/camera-module/services/camera.service';
import {
  concatMap,
  from,
  map,
  skipWhile,
  Subscription,
  tap,
  timeout,
  TimeoutError,
} from 'rxjs';
import { CovidCertificateService } from '../../../modules/health-certificate/services/covid-certificate.service';
import { SortStoreService } from '../../../store/sort-store.service';
import { CameraDialogService } from '../../../modules/camera-module/services/camera-dialog.service';
import { Router } from '@angular/router';
import {
  mapCertificateWrapperToDocumentModel,
  mapPkpassWrapperToDocumentModel,
} from './map-to-document-model.utils';
import { ActionMenuSheetService } from '../../../modules/ui-components/services/action-menu-sheet.service';
import { ActionListItemModel } from '../../../modules/ui-components/ActionListItem.model';
import { UserMessageService } from '../../../modules/ui-components/services/user-message.service';
import { QrcodeReaderService } from '../../../modules/camera-module/services/qrcode-reader.service';
import { blobToImageData } from '../../../modules/commons/utils/image-conversion.utils';
import { OverlayService } from '../../../modules/ui-components/services/overlay.service';
import { FileSystemService } from '../../../modules/file-system/services/FileSystem.service';
import { PkpassService } from '../../../modules/pkpass/services/pkpass.service';
import { FilePickerAcceptTypesConstants } from '../../../modules/file-system/utils/FilePickerAcceptTypes.constants';

@Component({
  selector: 'the-wallet-wallet-page',
  template: `
    <the-wallet-page-template>
      <the-wallet-app-bar title="Wallet" theWalletPageTemplateHeader>
        <ng-container theWalletAppBarStartElements>
          <mat-icon>account_balance_wallet</mat-icon>
        </ng-container>
        <ng-container theWalletAppBarEndElements>
          <the-wallet-drag-drop-slider></the-wallet-drag-drop-slider>
        </ng-container>
      </the-wallet-app-bar>
      <the-wallet-document-list
        [documentList]="documentList | sortDocumentsByArray: sortOrder"
        (sort)="onSort($event)"
        (delete)="onDelete($event)"
        (showMore)="onShowMore($event)"
        (documentShared)="onDocumentShared($event)"
        (error)="onError($event)"
        (documentDownloaded)="onDocumentDownloaded($event)"
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
    {
      matIcon: 'airplane_ticket',
      name: 'Import PKPass',
      action: () => {
        this.importPKPass();
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
    private overlayService: OverlayService,
    private pkpassService: PkpassService
  ) {}

  ngOnInit(): void {
    this.documentStore.getDocuments().subscribe({
      //Reassign Array so Angular will detect a change and redraw UI
      next: (value) => (this.documentList = [...this.documentList, value]),
      error: (err) => this.userMessageService.showUserMessage(err),
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

  onSort(sort: string[]) {
    this.sortService.updateSortOrder(sort).subscribe();
  }

  onDelete(id: string) {
    if (id) {
      this.documentStore.deleteDocument(id).subscribe({
        error: (err) => this.userMessageService.showUserMessage(err),
      });
    }
  }

  onShowMore(id: string) {
    if (id) {
      this.router.navigate(['document', id]);
    }
  }

  onDocumentShared(document: DocumentModel) {
    this.userMessageService.showUserMessage('Document shared!');
  }

  onDocumentDownloaded(document: DocumentModel) {
    this.userMessageService.showUserMessage('Document downloaded!');
  }

  onError(error: any) {
    this.userMessageService.showUserMessage(error);
  }

  handleError(exception: any) {
    this.overlayService.close();
    if (!(exception instanceof TimeoutError)) {
      console.error(exception);
      this.userMessageService.showUserMessage(exception);
    } else {
      console.log('intended Timeout of Observable.');
    }
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
        error: (err) => this.handleError(err),
        complete: () => console.log('closed'),
      });
  }

  importImage() {
    this.actionMenuSheetService.close();
    this.fileSystemService
      .readFiles([FilePickerAcceptTypesConstants.IMAGES], false)
      .pipe(
        //Cleanup Observable when there is no File selected in 100 seconds
        timeout(100000),
        tap(() => this.overlayService.openSpinnerOverlay()),
        concatMap((image) => blobToImageData(image[0])),
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
        error: (err) => this.handleError(err),
      });
  }

  private importPKPass() {
    this.actionMenuSheetService.close();
    this.fileSystemService
      .readFiles([FilePickerAcceptTypesConstants.PKPASS], false)
      .pipe(
        //Cleanup Observable when there is no File selected in 100 seconds
        timeout(100000),
        tap(() => this.overlayService.openSpinnerOverlay()),
        concatMap((files) => this.pkpassService.readPkpass(files[0])),
        map((pkpassWrapper) => mapPkpassWrapperToDocumentModel(pkpassWrapper)),
        concatMap((pkpassDocument) =>
          this.documentStore.saveDocument(pkpassDocument)
        ),
        tap((documet) => {
          console.log(documet);
        }),
        tap(() => {
          this.overlayService.close();
        })
      )
      .subscribe({
        next: (pkpassDocument) => console.log(pkpassDocument),
        error: (err) => this.handleError(err),
      });
  }

  ngOnDestroy(): void {
    if (this.documentChangeSubscription) {
      this.documentChangeSubscription.unsubscribe();
    }
    if (this.sortOrderSubscription) {
      this.sortOrderSubscription.unsubscribe();
    }
  }
}
