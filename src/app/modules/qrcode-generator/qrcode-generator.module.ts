import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcodeComponent } from './components/barcode/barcode.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToBarcodePipe } from './pipes/to-barcode.pipe';
import { QRCodeComponent } from './components/qrcode/qrcode.component';

@NgModule({
  declarations: [BarcodeComponent, ToBarcodePipe, QRCodeComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [BarcodeComponent, QRCodeComponent],
})
export class QRCodeGeneratorModule {}
