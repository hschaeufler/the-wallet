import {Component, Input, OnInit} from '@angular/core';
import {HealthCertificateModel} from "covid-certificate-checker/dist/lib/models/HealthCertificate.model";

@Component({
  selector: 'the-wallet-person-detail',
  template: `
      <mat-list>
        <mat-divider></mat-divider>
        <mat-list-item>
          <p mat-line>Name</p>
          <h1 mat-line>{{value.nam | toDisplayName}}</h1>
        </mat-list-item>
        <mat-divider></mat-divider>
        <mat-list-item>
          <p mat-line>Birthday</p>
          <h1 mat-line>{{value.dob | toLocaleDate}}</h1>
        </mat-list-item>
        <mat-divider></mat-divider>
      </mat-list>
  `,
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent {

  @Input()
  value!: HealthCertificateModel;

}
