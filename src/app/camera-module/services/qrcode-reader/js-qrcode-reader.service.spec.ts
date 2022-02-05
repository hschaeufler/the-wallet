import { TestBed } from '@angular/core/testing';

import { JsQrcodeReaderService } from './js-qrcode-reader.service';

describe('JSQrCodeReaderService', () => {
  let service: JsQrcodeReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsQrcodeReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
