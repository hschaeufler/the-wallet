import { Component, Input, OnInit } from '@angular/core';
import { Barcode } from '@pkpass/types/src/low-level';

@Component({
  selector: 'the-wallet-pkpass-barcode',
  template: `
    <the-wallet-barcode
      *ngIf="barcode"
      [value]="barcode.message"
      [format]="barcode.format | transformPKPassBarcodeFormat"
    ></the-wallet-barcode>
  `,
  styleUrls: ['./pkpass-barcode.component.scss'],
})
export class PkpassBarcodeComponent {
  @Input()
  barcode?: Barcode;
}
