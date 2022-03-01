import {Component, Input} from '@angular/core';
import {CertificateWrapperModel} from "../../../CertificateWrapper.model";

@Component({
  selector: 'the-wallet-health-certificate-preview',
  template: `
    <mat-card>
      <the-wallet-certificate-card-header
        *ngIf="value"
      [value]="value.healthCertificate"
      [isVerified]="value.isVerified"
      >
      </the-wallet-certificate-card-header>
    </mat-card>
  `,
  styleUrls: ['./health-certificate-preview.component.scss']
})
export class HealthCertificatePreviewComponent {

  @Input()
  value?: CertificateWrapperModel;

}
