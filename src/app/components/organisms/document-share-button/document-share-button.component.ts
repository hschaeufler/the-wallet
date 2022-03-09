import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentModel } from '../../../models/Document.model';
import { DocumentTypeEnum } from '../../../models/DocumentType.enum';
import { WebShareService } from '../../../modules/web-share/services/web-share.service';

@Component({
  selector: 'the-wallet-document-share-button',
  template: `
    <ng-container *ngIf="value" [ngSwitch]="value.type">
      <the-wallet-helth-certificate-share-button
        *ngSwitchCase="documentTypeEnum.HEALTHCERTIFICATE"
        [value]="value.content"
        [canShare]="canShare"
        (shareContentCreated)="onShareContentCreated($event)"
        (share)="onShare($event)"
      >
      </the-wallet-helth-certificate-share-button>
    </ng-container>
  `,
  styleUrls: ['./document-share-button.component.scss'],
})
export class DocumentShareButtonComponent {
  @Input()
  value?: DocumentModel;

  @Output()
  error = new EventEmitter<any>();

  @Output()
  documentShared = new EventEmitter<DocumentModel>();

  documentTypeEnum = DocumentTypeEnum;

  canShare = false;

  constructor(private webShareService: WebShareService) {}

  onShareContentCreated(shareData: ShareData) {
    this.canShare = this.webShareService.canShare(shareData);
  }

  onShare(shareData: ShareData) {
    this.webShareService.share(shareData).subscribe({
      error: (err) => {
        this.error.emit(err);
      },
      next: (shareData) => {
        this.documentShared.emit(this.value);
      },
    });
  }
}
