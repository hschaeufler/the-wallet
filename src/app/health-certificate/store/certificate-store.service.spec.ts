import { TestBed } from '@angular/core/testing';

import { CertificateStoreService } from './certificate-store.service';

describe('CertificateStoreService', () => {
  let service: CertificateStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificateStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
