import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcodeComponent } from './components/barcode/barcode.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToBarcodePipe } from './pipes/to-barcode.pipe';

@NgModule({
  declarations: [BarcodeComponent, ToBarcodePipe],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [BarcodeComponent],
})
export class QRCodeGeneratorModule {}
