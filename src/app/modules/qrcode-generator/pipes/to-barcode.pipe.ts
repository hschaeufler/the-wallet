import { Pipe, PipeTransform } from '@angular/core';
import { BarcodeTypeEnum } from '../services/BarcodeType.enum';
import { BarcodeGeneratorService } from '../services/barcode-generator.service';

@Pipe({
  name: 'toBarcode',
})
export class ToBarcodePipe implements PipeTransform {
  private static readonly DEFAULT_WIDTH_IN_MM = 50;
  private static readonly DEFAULT_HEIGTH_IN_MM = 50;

  constructor(private barcodeService: BarcodeGeneratorService) {}

  transform(value?: string, barcodeType?: BarcodeTypeEnum): string | undefined {
    try {
      if (value && barcodeType) {
        return this.barcodeService.generateBarcode(
          value,
          barcodeType,
          ToBarcodePipe.DEFAULT_WIDTH_IN_MM,
          ToBarcodePipe.DEFAULT_HEIGTH_IN_MM
        );
      }
    } catch (e) {
      console.error(e);
    }
    return undefined;
  }
}
