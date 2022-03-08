import { Injectable } from '@angular/core';
import QRCode from 'qrcode';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QRCodeGeneratorService {
  constructor() {}

  toDataURL(value: string): Observable<string> {
    return from(QRCode.toDataURL(value));
  }
}
