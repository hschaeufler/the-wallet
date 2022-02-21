import {Component, Input, OnInit} from '@angular/core';
import products from "../../../assets/ehn-dcc-valuesets/vaccine-medicinal-product.json"
import {CovidCertificateService} from "../services/covid-certificate.service";


@Component({
  selector: 'the-wallet-health-certificate',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{name}}</mat-card-title>
        <mat-card-subtitle>EU Zertifikat</mat-card-subtitle>
      </mat-card-header>
      <the-wallet-qrcode mat-card-image [value]="value"></the-wallet-qrcode>
      <mat-card-content>
        <mat-list>
          <mat-divider></mat-divider>
          <mat-list-item>
            <p mat-line>Name, Vorname</p>
            <h3 mat-line>Max Mustermann</h3>
          </mat-list-item>
          <mat-divider></mat-divider>
          <mat-list-item></mat-list-item>
          <mat-divider></mat-divider>
          <mat-list-item></mat-list-item>
          <mat-divider></mat-divider>
        </mat-list>
      </mat-card-content>

    </mat-card>
  `,
  styleUrls: ['./health-certificate.component.scss']
})
export class HealthCertificateComponent implements OnInit {

  @Input()
  value?: string;

  isVerified?: boolean;

  name: string = "Max Mustermann";

  constructor(private covidCertificateService: CovidCertificateService) { }

  ngOnInit(): void {
    if(this.value) {
      this.covidCertificateService.verify(this.value).subscribe({
        next: result => this.isVerified = result.isVerified,
        error: err => console.log(err),
      });
    }
  }

}
