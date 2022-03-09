import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentModel } from '../../../models/Document.model';
import { DocumentTypeEnum } from '../../../models/DocumentType.enum';

@Component({
  selector: 'the-wallet-document-list-element',
  template: `
    <ng-container [ngSwitch]="value.type">
      <the-wallet-health-certificate-preview
        *ngSwitchCase="documentTypeEnum.HEALTHCERTIFICATE"
        class="cursor-link"
        [value]="value.content"
        [expand]="isFirst"
        (showMore)="showMore.emit(value.id)"
      >
        <ng-container theWalletHealthCertificatePreviewActions>
          <the-wallet-icon-button (click)="delete.emit(value.id)">
            delete_forever
          </the-wallet-icon-button>
          <the-wallet-document-share-button
            [value]="value"
            (error)="error.emit($event)"
            (documentShared)="documentShared.emit(value)"
          >
          </the-wallet-document-share-button>
          <the-wallet-document-download-button
            [value]="value"
            (error)="error.emit($event)"
            (documentDownloaded)="documentDownloaded.emit(value)"
          >
          </the-wallet-document-download-button>
        </ng-container>
      </the-wallet-health-certificate-preview>
      <the-wallet-pkpass-preview
        *ngSwitchCase="documentTypeEnum.PKPASS"
        [value]="value.content"
        [expand]="isFirst"
        (showMore)="showMore.emit(value.id)"
        class="cursor-link"
      ></the-wallet-pkpass-preview>
    </ng-container>
  `,
  styleUrls: ['./document-list-element.component.scss'],
})
export class DocumentListElementComponent {
  @Input()
  value!: DocumentModel;

  @Input()
  isFirst = false;

  @Input()
  link?: string | any[];

  @Output()
  delete = new EventEmitter<string>();

  @Output()
  showMore = new EventEmitter<string>();

  @Output()
  error = new EventEmitter<any>();

  @Output()
  documentShared = new EventEmitter<DocumentModel>();

  @Output()
  documentDownloaded = new EventEmitter<DocumentModel>();

  documentTypeEnum = DocumentTypeEnum;

  constructor() {}
}
