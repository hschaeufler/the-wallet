import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CovidCertificateService} from "../../../services/covid-certificate.service";
import {Observable, Subscription} from "rxjs";
import {HealthCertificateModel} from "covid-certificate-checker/dist/lib/models/HealthCertificate.model";


@Component({
  selector: 'the-wallet-health-certificate',
  template: `
    <ng-container *ngIf="((healthCertificateClaim$ | async)?.healthCertificate)">
      <the-wallet-heatlh-certificate-card
        [value]="(healthCertificateClaim$ | async)!.healthCertificate"
        [qrCode]="value"
        [isVerified]="(healthCertificateClaim$ | async)!.isVerified"
      >
      </the-wallet-heatlh-certificate-card>
    </ng-container>
  `,
  styleUrls: ['./health-certificate.component.scss']
})
export class HealthCertificateComponent implements OnInit, OnDestroy {

  @Input()
  value!: string;


  healthCertificateClaim$!: Observable<{
    healthCertificate: HealthCertificateModel,
    isVerified: boolean
  }>;




  constructor(private covidCertificateService: CovidCertificateService) {

  }

  ngOnInit(): void {
      this.healthCertificateClaim$ = this.covidCertificateService.decode(this.value);
  }

  ngOnDestroy(): void {
  }

}
