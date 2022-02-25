import {Component, Input} from '@angular/core';
import {RecoveryEntry} from "covid-certificate-checker/dist/lib/models/HealthCertificate.model";

@Component({
  selector: 'the-wallet-recovery-detail',
  template: `
    <the-wallet-default-expansion-panel title="Recovery">
    <mat-list>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Target Disease</p>
        <h1 mat-line>{{value.tg | targetDisease}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Date of first positive Test</p>
        <h1 mat-line>{{value.fr | toLocaleDate}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Country</p>
        <h1 mat-line>{{value.co | toCountryName}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Certificate Issuer</p>
        <h1 mat-line>{{value.is}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Valid from</p>
        <h1 mat-line>{{value.df | toLocaleDate}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Valid until</p>
        <h1 mat-line>{{value.du | toLocaleDate}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Unique Certificate ID</p>
        <h1 mat-line>{{value.ci}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
    </mat-list>
    </the-wallet-default-expansion-panel>
  `,
  styleUrls: ['./recovery-detail.component.scss']
})
export class RecoveryDetailComponent {

  @Input()
  value!: RecoveryEntry;

}
