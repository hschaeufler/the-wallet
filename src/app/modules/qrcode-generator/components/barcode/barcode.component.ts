import { Component, Input } from '@angular/core';
import { QRCodeGeneratorService } from '../../services/qrcode-generator.service';
import { BarcodeTypeEnum } from '../../services/BarcodeType.enum';

@Component({
  selector: 'the-wallet-barcode',
  template: `
    <ng-container *ngIf="value && format; else spinner">
      <img class="barcode" [src]="value | toBarcode: format" />
    </ng-container>
    <ng-template #spinner>
      <mat-spinner></mat-spinner>
    </ng-template>
  `,
  styleUrls: ['./barcode.component.scss'],
})
export class BarcodeComponent {
  @Input()
  value?: string;

  @Input()
  format?: BarcodeTypeEnum;
}
