import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DocumentModel} from "../../../models/Document.model";
import {DocumentTypeEnum} from "../../../models/DocumentType.enum";


@Component({
  selector: 'the-wallet-document-list-element',
  template: `
    <ng-container [ngSwitch]="value.type">
      <the-wallet-health-certificate-preview
        *ngSwitchCase=documentTypeEnum.HEALTHCERTIFICATE
        class="cursor-link"
        [value]="value.content"
        [expand]="isFirst"
        (showMore)="showMore.emit(value.id)"
      >
        <the-wallet-icon-button
          (click)="delete.emit(value.id)"
          theWalletHealthCertificatePreviewActions
        >delete_forever</the-wallet-icon-button>
      </the-wallet-health-certificate-preview>
    </ng-container>
  `,
  styleUrls: ['./document-list-element.component.scss']
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

  documentTypeEnum = DocumentTypeEnum;

  constructor() { }

}
