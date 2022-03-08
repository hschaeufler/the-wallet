import { Component, Input, OnInit } from '@angular/core';
import { DocumentModel } from '../../../models/Document.model';
import { DocumentTypeEnum } from '../../../models/DocumentType.enum';

@Component({
  selector: 'the-wallet-document',
  template: `
    <ng-container *ngIf="value" [ngSwitch]="value.type">
      <the-wallet-health-certificate
        *ngSwitchCase="documentTypeEnum.HEALTHCERTIFICATE"
        [value]="value.content"
      ></the-wallet-health-certificate>
    </ng-container>
  `,
  styleUrls: ['./document.component.scss'],
})
export class DocumentComponent {
  @Input()
  value?: DocumentModel;

  documentTypeEnum = DocumentTypeEnum;

  constructor() {}
}
