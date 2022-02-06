import { Injectable } from '@angular/core';
import { NativeQrcodeReaderService } from "./native-qrcode-reader.service";

@Injectable({
  providedIn: 'root'
})
export class FeatureDetectionStartupService {

  private _qrCodeReader: boolean = false;
  private _isInit: boolean = false;

  constructor() { }

  get qrCodeReader(){
    if(!this.isInit){
      throw new DOMException("Please call init()-Function first!");
    }
    return this._qrCodeReader;
  }

  get isInit(){
    return this._isInit;
  }

  async init(){
    try {
      await this.detectQRCodeReader();
    } catch(e) {
      console.error("Error during Feature-Detecton", e);
    } finally {
      this._isInit = true;
    }
  }


  private async detectQRCodeReader(){
    this._qrCodeReader = await NativeQrcodeReaderService.supportsNativeQRCodeApi();
    return this._qrCodeReader;
  }


}
