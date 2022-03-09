import { Component, Input } from '@angular/core';
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
      <the-wallet-pkpass
        *ngSwitchCase="documentTypeEnum.PKPASS"
        [value]="value.content"
      >
      </the-wallet-pkpass>
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
