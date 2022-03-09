import { Pipe, PipeTransform } from '@angular/core';
import { Barcode } from '@pkpass/types/src/low-level';
import { BarcodeTypeEnum } from '../../qrcode-generator/services/BarcodeType.enum';

@Pipe({
  name: 'transformPKPassBarcodeFormat',
})
export class TransformPKPassBarcodeFormatPipe implements PipeTransform {
  transform(value: Barcode.Type): BarcodeTypeEnum {
    switch (value) {
      case Barcode.Type.Aztec:
        return BarcodeTypeEnum.AZTECCODE;
      case Barcode.Type.Code128:
        return BarcodeTypeEnum.CODE128;
      case Barcode.Type.PDF417:
        return BarcodeTypeEnum.PDF417;
      case Barcode.Type.QR:
        return BarcodeTypeEnum.QRCODE;
    }
  }
}
