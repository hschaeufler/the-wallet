import {Component, Input, OnInit} from '@angular/core';
import QRCode from 'qrcode';
import {from} from "rxjs";

@Component({
  selector: 'the-wallet-qrcode',
  template: `
    <ng-container *ngIf="value else spinner">
      <img [src]="qrCodeDataURL">
    </ng-container>
    <ng-template #spinner>
      <mat-spinner></mat-spinner>
    </ng-template>
  `,
  styleUrls: ['./qrcode.component.scss']
})
export class QRCodeComponent implements OnInit {

  @Input()
  value!: string;

  qrCodeDataURL?: string;

  constructor() { }

  ngOnInit(): void {
      from(QRCode.toDataURL(this.value)).subscribe({
        next: qrCodeDataURL => this.qrCodeDataURL = qrCodeDataURL,
        error: err => console.error(err)
      });
    }

}
