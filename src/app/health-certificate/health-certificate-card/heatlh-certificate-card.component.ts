import {Component, Input, OnInit} from '@angular/core';
import {HealthCertificateModel} from 'covid-certificate-checker/dist/lib/models/HealthCertificate.model';
import {CertificateTypeEnum} from "../CertificateType.enum";

@Component({
  selector: 'the-wallet-heatlh-certificate-card',
  template: `
    <mat-card class="health-certificate-card">
      <mat-card-header>
        <button mat-card-avatar mat-fab disabled>
          <mat-icon aria-label="Vaccination Image">{{value | toCertificateTypeIcon}}</mat-icon>
        </button>
          <mat-card-title>{{value.nam | toDisplayName}}</mat-card-title>
          <mat-card-subtitle>{{value | certificateTypeName}} Certificate</mat-card-subtitle>
        <the-wallet-certificate-card-chip-list
          [isVerified]="isVerified"
          [type]="value | certificateTypeName"
        ></the-wallet-certificate-card-chip-list>
      </mat-card-header>
      <mat-divider></mat-divider>
      <the-wallet-qrcode mat-card-image [value]="qrCode"></the-wallet-qrcode>
      <mat-divider></mat-divider>
      <br>
      <mat-card-content>
        <h2>Person Details</h2>
        <the-wallet-person-detail [value]="value"></the-wallet-person-detail>
        <br>
        <h2>Certificate Details</h2>
        <ng-container [ngSwitch]="value | certificateType" ]>
          <the-wallet-vaccination-detail *ngSwitchCase="certificateTypeEnum.VACCINATION"
                                         [value]="value.v![0]">
          </the-wallet-vaccination-detail>
          <the-wallet-test-detail *ngSwitchCase="certificateTypeEnum.TEST"
                                  [value]="value.t![0]">
          </the-wallet-test-detail>
          <the-wallet-recovery-detail *ngSwitchCase="certificateTypeEnum.RECOVERY"
                                      [value]="value.r![0]">
          </the-wallet-recovery-detail>
        </ng-container>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./heatlh-certificate-card.component.scss']
})
export class HeatlhCertificateCardComponent {

  certificateTypeEnum = CertificateTypeEnum;

  @Input()
  value!: HealthCertificateModel;

  @Input()
  qrCode!: string;

  @Input()
  isVerified = false;
}
