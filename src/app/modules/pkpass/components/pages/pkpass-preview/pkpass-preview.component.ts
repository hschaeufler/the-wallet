import { Component } from '@angular/core';
import { AbstractDocumentPreviewComponent } from '../../../../document-module-api/components/pages/abstract-document-preview/abstract-document-preview.component';
import { PkpassWrapperModel } from '../../../PkpassWrapper.model';

@Component({
  selector: 'the-wallet-pkpass-preview',
  template: `
    <the-wallet-document-preview-template [isLoading]="!value">
      <the-wallet-pkpass-card-header
        theWalletDocumentPreviewHeader
        [value]="value"
        (click)="showMore.emit(value)"
      ></the-wallet-pkpass-card-header>
      <ng-container theWalletDocumentPreviewExpandedContent>
        <the-wallet-pkpass-primary-fields
          [passType]="value.passType"
          [passFields]="value.passFields"
          *ngIf="value"
          (click)="showMore.emit(value)"
        >
        </the-wallet-pkpass-primary-fields>
        <the-wallet-pkpass-barcode
          mat-card-image
          *ngIf="value"
          [barcode]="value.barcode"
          (click)="showMore.emit(value)"
        ></the-wallet-pkpass-barcode>
      </ng-container>
      <ng-container theWalletDocumentPreviewActions>
        <ng-content select="theWalletPkpassPreviewActions"></ng-content>
      </ng-container>
    </the-wallet-document-preview-template>
  `,
  styleUrls: ['./pkpass-preview.component.scss'],
})
export class PkpassPreviewComponent extends AbstractDocumentPreviewComponent<PkpassWrapperModel> {
  constructor() {
    super();
  }
}
