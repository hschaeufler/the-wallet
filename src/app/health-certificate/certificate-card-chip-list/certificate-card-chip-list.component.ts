import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'the-wallet-certificate-card-chip-list',
  template: `
    <mat-chip-list aria-label="Details">
      <mat-chip *ngIf="isVerified" color="primary" selected>Verified</mat-chip>
      <mat-chip *ngIf="type" color="accent" selected>{{type}}</mat-chip>
    </mat-chip-list>
  `,
  styleUrls: ['./certificate-card-chip-list.component.scss']
})
export class CertificateCardChipListComponent {

  @Input()
  isVerified = false;

  @Input()
  type= "";
}
