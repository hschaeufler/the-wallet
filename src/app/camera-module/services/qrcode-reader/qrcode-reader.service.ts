export abstract class QrcodeReaderService {
  abstract detectImage(imageData: ImageData): Promise<QRCodeModel[]>;
}
