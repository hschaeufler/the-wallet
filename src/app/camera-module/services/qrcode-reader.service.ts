import {QRCodeModel} from "./QRCode.model";

export abstract class QrcodeReaderService {
  abstract detectImage(imageData: ImageData): Promise<QRCodeModel[]>;
  abstract getImplementation(): string;
}
