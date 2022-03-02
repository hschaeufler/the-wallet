import { TestBed } from '@angular/core/testing';

import { DocumentSignerCertificateServiceService } from './document-signer-certificate-service.service';

describe('DocumentSignerCertificateServiceService', () => {
  let service: DocumentSignerCertificateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentSignerCertificateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
