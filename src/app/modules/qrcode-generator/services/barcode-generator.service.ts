import { Injectable } from '@angular/core';
import bwipjs from 'bwip-js';
import { BarcodeTypeEnum } from './BarcodeType.enum';

@Injectable({
  providedIn: 'root',
})
export class BarcodeGeneratorService {
  constructor() {}

  generateBarcode(
    content: string,
    format: BarcodeTypeEnum,
    width?: number,
    heigth?: number
  ): string {
    const offscreenCanvas = document.createElement('canvas');
    const canvas = bwipjs.toCanvas(offscreenCanvas, {
      width: width,
      height: heigth,
      bcid: format,
      text: content,
    });
    return canvas.toDataURL();
  }
}
