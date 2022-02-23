import {Component, Input, OnInit} from '@angular/core';
import {VaccinationEntry} from "covid-certificate-checker/dist/lib/models/HealthCertificate.model";

@Component({
  selector: 'the-wallet-vaccination-detail',
  template: `
    <mat-list>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Target Disease</p>
        <h1 mat-line>{{value.tg | targetDisease}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Vaccine Type</p>
        <h1 mat-line>{{value.vp | vaccineType}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Vaccine</p>
        <h1 mat-line>{{value.vp | vaccine}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Manufacturer</p>
        <h1 mat-line>{{value.ma | vaccineManufacturer}}</h1>
      </mat-list-item>
      <mat-list-item>
        <p mat-line>Dose Nr.</p>
        <h1 mat-line>{{value.dn}} / {{value.sd}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Dose Nr.</p>
        <h1 mat-line>{{value.dn}} / {{value.sd}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Vaccination Date</p>
        <h1 mat-line>{{value.dt | toLocaleDate}}</h1>
      </mat-list-item>
      <mat-list-item>
        <p mat-line>Country of Vaccination</p>
        <h1 mat-line>{{value.co | toCountryName}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Certificate Issuer</p>
        <h1 mat-line>{{value.is}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Unique Certificate ID</p>
        <h1 mat-line>{{value.ci}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
    </mat-list>
  `,
  styleUrls: ['./vaccination-detail.component.scss']
})
export class VaccinationDetailComponent {

  @Input()
  value!: VaccinationEntry;

}
