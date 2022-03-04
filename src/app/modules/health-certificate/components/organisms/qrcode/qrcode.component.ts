import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
export class QRCodeComponent implements OnChanges {

  @Input()
  value?: string;

  qrCodeDataURL?: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.value) {
      from(QRCode.toDataURL(this.value)).subscribe({
        next: qrCodeDataURL => this.qrCodeDataURL = qrCodeDataURL,
        error: err => console.error(err)
      });
    }
  }

}
