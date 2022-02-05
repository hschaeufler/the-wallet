import { TestBed } from '@angular/core/testing';

import { NativeQrcodeReaderService } from './native-qrcode-reader.service';

describe('NativeQrcodeReaderService', () => {
  let service: NativeQrcodeReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NativeQrcodeReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
