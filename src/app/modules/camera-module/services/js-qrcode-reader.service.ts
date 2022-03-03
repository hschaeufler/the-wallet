import jsQR from "jsqr";
import { QrcodeReaderService } from "./qrcode-reader.service";
import { QRCodeModel } from "./QRCode.model";

export class JsQrcodeReaderService implements QrcodeReaderService {

  constructor() { }

  async detectImage(imageData: ImageData): Promise<QRCodeModel[]> {
    let qrCodeModel: QRCodeModel | undefined;
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    //Avoid "False Positives" of QR-Codes (Sometimes the library recognize not exisiting QR-Codes
    //see: https://github.com/cozmo/jsQR/issues/90
    if(code && code.binaryData.length > 0) {
      qrCodeModel = {
        value: code.data
      };
    }
    return qrCodeModel ? [qrCodeModel] : [];
  }

  getImplementation(): string {
    return "JAVASCRIPT";
  }
}
