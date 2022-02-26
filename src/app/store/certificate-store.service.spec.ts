import { TestBed } from '@angular/core/testing';

import { DocumentStoreService } from './document-store.service';

describe('CertificateStoreService', () => {
  let service: DocumentStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
