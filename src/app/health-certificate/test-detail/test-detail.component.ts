import { Component, Input, OnInit } from '@angular/core';
import {TestEntry} from "covid-certificate-checker/dist/lib/models/HealthCertificate.model";

@Component({
  selector: 'the-wallet-test-detail',
  template: `
    <the-wallet-default-expansion-panel title="Test">
    <mat-list>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Target Disease</p>
        <h1 mat-line>{{value.tg | targetDisease}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Test Type</p>
        <h1 mat-line>{{value.tt | testType}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item *ngIf="value.nm">
        <p mat-line>Test Name</p>
        <h1 mat-line>{{value.nm}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item *ngIf="value.ma">
        <p mat-line>Manufacturer</p>
        <h1 mat-line>{{value.ma | testManufacturer}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Sample Collection Date</p>
        <h1 mat-line>{{value.sc | toLocaleDate}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Test Result</p>
        <h1 mat-line>{{value.tr | toTestResult}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <p mat-line>Testing Center</p>
        <h1 mat-line>{{value.tc}}</h1>
      </mat-list-item>
      <mat-divider></mat-divider>
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
    </the-wallet-default-expansion-panel>
  `,
  styleUrls: ['./test-detail.component.scss']
})
export class TestDetailComponent implements OnInit {

  @Input()
  value!: TestEntry;

  constructor() { }

  ngOnInit(): void {
  }

}
