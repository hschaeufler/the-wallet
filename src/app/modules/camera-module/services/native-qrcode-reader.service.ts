import { QrcodeReaderService } from "./qrcode-reader.service";
import { QRCodeModel } from "./QRCode.model";

export class NativeQrcodeReaderService implements QrcodeReaderService {

  static readonly BARCODE_FORMAT_QR_CODE = "qr_code";
  private qrBarcodeDetector: BarcodeDetector | undefined;


  constructor() { }



  private async initializeBarcodeDetector(barcodeFormat: BarcodeFormat[]): Promise<BarcodeDetector> {
    const barcodeFormatIsSupported = await NativeQrcodeReaderService.detectSupportedBarCodeFormat(barcodeFormat);
      if(barcodeFormatIsSupported) {
        return new BarcodeDetector({formats: barcodeFormat})
      }
      throw new DOMException("Barcode API or Format is not supported!");
  }

  private async initializeQRCodeReader(): Promise<BarcodeDetector> {
    this.qrBarcodeDetector = await this.initializeBarcodeDetector([NativeQrcodeReaderService.BARCODE_FORMAT_QR_CODE]);
    return this.qrBarcodeDetector;
  }

  private static async detectSupportedBarCodeFormat(barcodeFormats: BarcodeFormat[]): Promise<boolean> {
    return 'BarcodeDetector' in window
      && BarcodeDetector.getSupportedFormats
      && barcodeFormats.every(async format => (await BarcodeDetector.getSupportedFormats()).includes(format));
  }

  static async supportsNativeQRCodeApi(): Promise<boolean> {
    return await this.detectSupportedBarCodeFormat([NativeQrcodeReaderService.BARCODE_FORMAT_QR_CODE]);
  }

  async detectImage(imageData: ImageData): Promise<QRCodeModel[]> {
    if(!(await NativeQrcodeReaderService.supportsNativeQRCodeApi())) {
      throw new DOMException("Your devices doesn't supports the native QR-Code-Scanner-Api!")
    }
    const qrCodeDetector = this.qrBarcodeDetector ? this.qrBarcodeDetector : await this.initializeQRCodeReader();
    const codes = await qrCodeDetector.detect(imageData);
    const qrCodeModel: QRCodeModel[] = codes.map((code) => {return {
        value: code.rawValue
    } as QRCodeModel})
    return qrCodeModel;
  }

  getImplementation(): string {
    return "NATIVE";
  }

}
