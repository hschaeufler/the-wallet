import {Component, Input, OnInit} from '@angular/core';
import {DocumentModel} from "../../../models/Document.model";
import {DocumentTypeEnum} from "../../../models/DocumentType.enum";


@Component({
  selector: 'the-wallet-document-list-element',
  template: `
    <ng-container [ngSwitch]="value.type">
      <the-wallet-health-certificate-preview
        *ngSwitchCase=documentTypeEnum.HEALTHCERTIFICATE

        class="cursor-link"
        [link]="['/document', value.id]"
        [value]="value.content"
        [expand]="isFirst"
      >
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

  documentTypeEnum = DocumentTypeEnum;

  constructor() { }

}
