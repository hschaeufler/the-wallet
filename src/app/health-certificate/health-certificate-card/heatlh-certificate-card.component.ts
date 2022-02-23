import {Component, Input, OnInit} from '@angular/core';
import { HealthCertificateModel } from 'covid-certificate-checker/dist/lib/models/HealthCertificate.model';

@Component({
  selector: 'the-wallet-heatlh-certificate-card',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{value.nam | toDisplayName}}</mat-card-title>
        <mat-card-subtitle>{{value | certificateTypeName}} Certificate</mat-card-subtitle>
      </mat-card-header>
      <the-wallet-qrcode mat-card-image [value]="qrCode"></the-wallet-qrcode>
      <mat-card-content>
        <the-wallet-person-detail [value]="value"></the-wallet-person-detail>
        <the-wallet-vaccination-detail [value]="value.v[0]"></the-wallet-vaccination-detail>
        <the-wallet-test-detail [value]="value.t[0]"></the-wallet-test-detail>
        <the-wallet-recovery-detail [value]="value.r[0]"></the-wallet-recovery-detail>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./heatlh-certificate-card.component.scss']
})
export class HeatlhCertificateCardComponent implements OnInit {

  @Input()
  value!: HealthCertificateModel;

  @Input()
  qrCode!: string;

  @Input()
  isVerified!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
