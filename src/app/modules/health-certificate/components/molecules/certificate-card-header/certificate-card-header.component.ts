import { Component, Input } from '@angular/core';
import { HealthCertificateModel } from 'covid-certificate-checker/dist/lib/models/HealthCertificate.model';

@Component({
  selector: 'the-wallet-certificate-card-header',
  template: `
    <ng-container *ngIf="value; else progressspinner">
      <mat-card-header>
        <button
          mat-card-avatar
          mat-fab-mini
          disabled
          class="certificate-header-avatar"
        >
          <mat-icon
            aria-label="Vaccination Image"
            class="certificate-header-icon"
            >{{ value | toCertificateTypeIcon }}</mat-icon
          >
        </button>
        <mat-card-title>{{ value.nam | toDisplayName }}</mat-card-title>
        <mat-card-subtitle class="certificate-header-subtitle"
          >{{ value | certificateTypeName }} Certificate</mat-card-subtitle
        >
        <the-wallet-certificate-card-chip-list
          [isVerified]="isVerified"
          [type]="value | certificateTypeName"
        ></the-wallet-certificate-card-chip-list>
      </mat-card-header>
    </ng-container>
    <ng-template #progressspinner>
      <mat-card-header class="progress-spinner-card-header">
        <mat-spinner></mat-spinner>
      </mat-card-header>
    </ng-template>
  `,
  styleUrls: ['./certificate-card-header.component.scss'],
})
export class CertificateCardHeaderComponent {
  @Input()
  value?: HealthCertificateModel;

  @Input()
  isVerified = false;
}
