import { Component } from '@angular/core';
import { AbstractDocumentPreviewComponent } from '../../../../document-module-api/components/pages/abstract-document-preview/abstract-document-preview.component';
import { CertificateWrapperModel } from '../../../CertificateWrapper.model';

@Component({
  selector: 'the-wallet-health-certificate-preview',
  template: `
    <the-wallet-document-preview-template [isLoading]="!value">
      <the-wallet-certificate-card-header
        theWalletDocumentPreviewHeader
        *ngIf="value"
        [value]="value.healthCertificate"
        [isVerified]="value.isVerified"
        (click)="showMore.emit(value)"
      >
      </the-wallet-certificate-card-header>
      <ng-container theWalletDocumentPreviewExpandedContent>
        <the-wallet-qrcode
          *ngIf="value"
          [value]="value.qrCode"
          (click)="showMore.emit(value)"
          mat-card-image
        >
        </the-wallet-qrcode>
      </ng-container>
      <ng-container theWalletDocumentPreviewActions>
        <ng-content
          select="[theWalletHealthCertificatePreviewActions]"
        ></ng-content>
      </ng-container>
    </the-wallet-document-preview-template>
  `,
  styleUrls: ['./health-certificate-preview.component.scss'],
})
export class HealthCertificatePreviewComponent extends AbstractDocumentPreviewComponent<CertificateWrapperModel> {}
