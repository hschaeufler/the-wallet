import { Component, OnInit } from '@angular/core';
import { concatMap, map, tap, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentStoreService } from '../../../store/document-store.service';
import { QRCodeGeneratorService } from '../../../modules/qrcode-generator/services/qrcode-generator.service';
import { UserMessageService } from '../../../modules/ui-components/services/user-message.service';
import { DocumentModel } from '../../../models/Document.model';

@Component({
  selector: 'the-wallet-document-page',
  template: `
    <the-wallet-page-template>
      <the-wallet-app-bar
        title="Certificate Details"
        theWalletPageTemplateHeader
      >
        <ng-container theWalletAppBarStartElements>
          <the-wallet-icon-button (click)="goBack($event)"
            >arrow_back_ios
          </the-wallet-icon-button>
          <mat-icon>privacy_tip</mat-icon>
        </ng-container>
        <ng-container theWalletAppBarEndElements>
          <the-wallet-icon-button (click)="delete($event)">
            delete_forever
          </the-wallet-icon-button>
          <the-wallet-document-share-button
            [value]="document"
            (error)="onError($event)"
            (documentShared)="onDocumentShared($event)"
          ></the-wallet-document-share-button>
          <the-wallet-document-download-button
            [value]="document"
            (error)="onError($event)"
            (documentDownloaded)="onDocumentDownloaded($event)"
          >
          </the-wallet-document-download-button>
        </ng-container>
      </the-wallet-app-bar>
      <the-wallet-document
        *ngIf="document"
        [value]="document"
      ></the-wallet-document>
    </the-wallet-page-template>
  `,
  styleUrls: ['./document-page.component.scss'],
})
export class DocumentPageComponent implements OnInit {
  document?: DocumentModel;
  id?: string;
  file?: File;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private documentStore: DocumentStoreService,
    private qrCodeService: QRCodeGeneratorService,
    private userMessageService: UserMessageService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => params['id']),
        tap((id) => (this.id = id)),
        concatMap((id) => this.documentStore.getDocument(id)),
        map((document) => {
          if (!document) {
            throw new DOMException('Document does not Exist');
          }
          return document;
        })
      )
      .subscribe({
        next: (document) => (this.document = document),
        error: (err) => this.userMessageService.showUserMessage(err),
      });
  }

  goBack($event: MouseEvent) {
    this.router.navigate(['wallet']);
  }

  delete($event: MouseEvent) {
    if (this.id) {
      this.documentStore.deleteDocument(this.id).subscribe({
        next: () => this.router.navigate(['wallet']),
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  onError(err: any) {
    this.userMessageService.showUserMessage(err);
  }

  onDocumentShared(document: DocumentModel) {
    this.userMessageService.showUserMessage('Document shared!');
  }

  onDocumentDownloaded(document: DocumentModel) {
    this.userMessageService.showUserMessage('Document downloaded!');
  }
}
