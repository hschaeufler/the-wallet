import {Injectable} from '@angular/core';
import jsQR from "jsqr";
import {QrcodeReaderService} from "./qrcode-reader.service";

@Injectable({
  providedIn: 'root'
})
export class NativeQrcodeReaderService implements QrcodeReaderService {

  static readonly BARCODE_FORMAT_QR_CODE = "qr_code";
  private qrCodeEngine: BarcodeDetector;


  constructor() {
    this.supportsNativeQRCodeApi().then((supportsNativeScanner)=>{
      if(supportsNativeScanner){
        this.qrCodeEngine = new BarcodeDetector({formats: [NativeQrcodeReaderService.BARCODE_FORMAT_QR_CODE]})
      }
    })
  }

  private async detectSupportedBarCodeFormat(barcodeFormats: BarcodeFormat[]): Promise<boolean> {
    return 'BarcodeDetector' in window
      && BarcodeDetector.getSupportedFormats
      && barcodeFormats.every(async format => (await BarcodeDetector.getSupportedFormats()).includes(format));
  }

  async supportsNativeQRCodeApi(): Promise<boolean> {
    return await this.detectSupportedBarCodeFormat([NativeQrcodeReaderService.BARCODE_FORMAT_QR_CODE]);
  }

  async detectImage(imageData: ImageData): Promise<QRCodeModel[]> {
    const codes = await this.qrCodeEngine.detect(imageData);
    const qrCodeModel: QRCodeModel[] = codes.map((code) => {return {
        value: code.rawValue
    } as QRCodeModel})
    return qrCodeModel;
  }

}
