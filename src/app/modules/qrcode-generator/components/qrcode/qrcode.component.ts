import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QRCodeGeneratorService } from '../../services/qrcode-generator.service';

@Component({
  selector: 'the-wallet-qrcode',
  template: `
    <ng-container *ngIf="value; else spinner">
      <img [src]="qrCodeDataURL" />
    </ng-container>
    <ng-template #spinner>
      <mat-spinner></mat-spinner>
    </ng-template>
  `,
  styleUrls: ['./qrcode.component.scss'],
})
export class QRCodeComponent implements OnChanges {
  @Input()
  value?: string;

  qrCodeDataURL?: string;

  constructor(private qrCodeGenerator: QRCodeGeneratorService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.value) {
      this.qrCodeGenerator.toDataURL(this.value).subscribe({
        next: (qrCodeDataURL) => (this.qrCodeDataURL = qrCodeDataURL),
        error: (err) => console.error(err),
      });
    }
  }
}
