import { Injectable } from '@angular/core';
import { NativeQrcodeReaderService } from './native-qrcode-reader.service';

/*
 * Service dient der Feature-Detection
 * Die Api orientiert sich an der Modernizer-Api
 * Da bestimmte Features nur Asynchron geprüft werden können (Bsp. BarCode-Api für QR-Codes), aber nicht zu jeder Zeit
 * asynchrone Methoden genutzt werden können (bsp. in einer Factory-Methode Dependecy-Provider) finden diese Prüfungen
 * initial beim Start des Camera-Moduls statt. Hier ist es möglich auch Asynchrone Funktionen zu nutzen. Damit die
 * entsprechende Methode beim Modul-Start gerufen wird, wird der APP_INITIALIZER-Token genutzt.
 * */
@Injectable({
  providedIn: 'root',
})
export class FeatureDetectionService {
  private _qrCodeReader: boolean = false;
  private _isInit: boolean = false;

  constructor() {}

  async init() {
    try {
      await this.detectQRCodeReader();
    } catch (e) {
      console.error('Error during Feature-Detection', e);
    } finally {
      this._isInit = true;
    }
  }

  get isInit() {
    return this._isInit;
  }

  private async detectQRCodeReader() {
    this._qrCodeReader =
      await NativeQrcodeReaderService.supportsNativeQRCodeApi();
    return this._qrCodeReader;
  }

  get qrCodeReader() {
    if (!this.isInit) {
      throw new DOMException('Please call init()-Function first!');
    }
    return this._qrCodeReader;
  }

  mediaDevices() {
    return 'mediaDevices' in navigator;
  }

  getUserMedia() {
    return this.mediaDevices() && 'getUserMedia' in navigator.mediaDevices;
  }

  enumerateDevices() {
    return this.mediaDevices() && 'enumerateDevices' in navigator.mediaDevices;
  }

  getSupportedConstraints() {
    return (
      this.mediaDevices() && 'getSupportedConstraints' in navigator.mediaDevices
    );
  }

  canvas() {
    return !!(
      document.createElement('canvas').getContext &&
      document.createElement('canvas').getContext('2d') &&
      document.createElement('canvas').toBlob
    );
  }

  imageCapture() {
    return 'ImageCapture' in window;
  }
}
