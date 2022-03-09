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
      ></the-wallet-pkpass-card-header>
      <ng-container theWalletDocumentPreviewExpandedContent>
        <the-wallet-pkpass-barcode
          mat-card-image
          *ngIf="value"
          [barcode]="value.barcode"
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
