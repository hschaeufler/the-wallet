import { Component } from '@angular/core';
import { AbstractDocumentPreviewComponent } from '../../../../document-module-api/components/pages/abstract-document-preview/abstract-document-preview.component';
import { CertificateWrapperModel } from '../../../CertificateWrapper.model';

@Component({
  selector: 'the-wallet-health-certificate-preview',
  template: `
    <mat-card
      *ngIf="value"
      [class]="expand ? 'health-certificate-expanded' : ''"
    >
      <the-wallet-certificate-card-header
        [value]="value.healthCertificate"
        [isVerified]="value.isVerified"
        (click)="showMore.emit(value)"
      >
      </the-wallet-certificate-card-header>
      <ng-container *ngIf="expand">
        <the-wallet-qrcode
          [value]="value.qrCode"
          (click)="showMore.emit(value)"
          mat-card-image
        >
        </the-wallet-qrcode>
      </ng-container>
      <mat-card-footer class="health-certificate-preview-footer">
        <the-wallet-icon-button (click)="toogleExpand($event)">{{
          expand ? 'expand_less' : 'expand_more'
        }}</the-wallet-icon-button>
        <div class="health-certificate-preview-actions">
          <ng-content
            select="[theWalletHealthCertificatePreviewActions]"
          ></ng-content>
        </div>
      </mat-card-footer>
    </mat-card>
  `,
  styleUrls: ['./health-certificate-preview.component.scss'],
})
export class HealthCertificatePreviewComponent extends AbstractDocumentPreviewComponent<CertificateWrapperModel> {}
