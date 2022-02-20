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

  const cert =
    "HC1:NCFOXN%TSMAHN-H9QCGDSB5QPN9OO3TH4O:5+T9DNUOGIB8B/*R:X9LGC0/KK1JZZPQA3DP4OW631AX5QF36FY1OSMNV1L8VNF6O M3PU1H6EB6JFEUF6+XEQ MJS6K1N63FEL62+0+BB4DJ4NJ323L23T+0SZ4ZI00T9 E9PF6846A$QW76SW6B699B5RFUOV13W1.UI2PHUIE+-CZJJQU2X*5YGFC-OPC1LJL4A7K73X*5OX42F1M*KYC3.Z8 X45B9-NT0 2$$0X4PCY0X:CZD5CC9T0H.3TU54JWHUVI/E2$4JY/KS-K1Q2V5T+5L /K9:KDP48X2C4T6ALD-IW G-IFNHF+*4LK0*+73E8U2MWKP/HLIJL8JF8JF172TF1A0LK6MGH1M7LHBHERN34CNYQS TF OF 6TTI4J9ZWC+ERZZJ/N7-G6ZN5:YONZ5 NF*0Q24KWJUVDTK/VIQ99GW4/AAKV45MLNCI00E+702";
  it('should decode base64', ()=>{
    expect(service.decodeCertificate(cert)).toEqual(jasmine.any(String));
  })


});
