import { Component, Input, OnInit } from '@angular/core';
import { CovidCertificateService } from '../../../services/covid-certificate.service';
import { Observable } from 'rxjs';
import { HealthCertificateModel } from 'covid-certificate-checker/dist/lib/models/HealthCertificate.model';
import { CertificateWrapperModel } from '../../../CertificateWrapper.model';

@Component({
  selector: 'the-wallet-health-certificate',
  template: `
    <ng-container *ngIf="(healthCertificateClaim$ | async)?.healthCertificate">
      <the-wallet-heatlh-certificate-card
        [value]="(healthCertificateClaim$ | async)!.healthCertificate"
        [qrCode]="value.qrCode"
        [isVerified]="(healthCertificateClaim$ | async)!.isVerified"
      >
      </the-wallet-heatlh-certificate-card>
    </ng-container>
  `,
  styleUrls: ['./health-certificate.component.scss'],
})
export class HealthCertificateComponent implements OnInit {
  @Input()
  value!: CertificateWrapperModel;

  healthCertificateClaim$!: Observable<{
    healthCertificate: HealthCertificateModel;
    isVerified: boolean;
  }>;

  constructor(private covidCertificateService: CovidCertificateService) {}

  ngOnInit(): void {
    this.healthCertificateClaim$ = this.covidCertificateService.decode(
      this.value.qrCode
    );
  }
}
