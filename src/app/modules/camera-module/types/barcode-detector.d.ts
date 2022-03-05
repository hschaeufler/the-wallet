/* Type-Definition of Barcode Detection Api-Types
 * https://wicg.github.io/shape-detection-api/#barcode-detection-api
 */
declare class BarcodeDetector {
  constructor(barcodeDetectorOptions?: BarcodeDetectorOptions);

  static getSupportedFormats(): Promise<BarcodeFormat[]>;

  detect(image: ImageBitmapSource): Promise<DetectedBarcode[]>;
}

interface BarcodeDetectorOptions {
  formats: BarcodeFormat[];
}

type BarcodeFormat =
  | 'aztec'
  | 'code_128'
  | 'code_39'
  | 'code_93'
  | 'codabar'
  | 'data_matrix'
  | 'ean_13'
  | 'ean_8'
  | 'itf'
  | 'pdf417'
  | 'qr_code'
  | 'unknown'
  | 'upc_a'
  | 'upc_e';

interface DetectedBarcode {
  boundingBox: DOMRectReadOnly;
  rawValue: W3C.DOMString;
  format: BarcodeFormat;
  readonly cornerPoints: Point2D[];
}

declare namespace W3C {
  type DOMString = string;
}
