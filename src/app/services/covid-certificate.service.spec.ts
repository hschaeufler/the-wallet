import { TestBed } from '@angular/core/testing';

import { CovidCertificateService } from './covid-certificate.service';

describe('CovidCertificateService', () => {
  let service: CovidCertificateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidCertificateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
