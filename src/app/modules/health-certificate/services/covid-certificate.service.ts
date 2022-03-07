import { Injectable, OnInit } from '@angular/core';
import ElectronicHealthCertificateChecker from 'covid-certificate-checker';
import { catchError, from, map, Observable, of, throwError } from 'rxjs';
import { TrustListModel } from 'covid-certificate-checker/dist/lib/models/TrustList.model';
import { DocumentSignerCertificateServiceService } from './document-signer-certificate-service.service';
import { CertificateWrapperModel } from '../CertificateWrapper.model';

@Injectable({
  providedIn: 'root',
})
export class CovidCertificateService {
  dscList?: TrustListModel;

  constructor(
    private documentSignerCertificateService: DocumentSignerCertificateServiceService
  ) {
    this.documentSignerCertificateService.getDSCList().subscribe({
      next: (dscList) => (this.dscList = dscList),
      error: (err) => console.log('No DSCList ascertainable', err),
    });
  }

  isVerifiable() {
    return (
      !!this.dscList &&
      ElectronicHealthCertificateChecker.supportsWebCryptoApi()
    );
  }

  decode(certificate: string): Observable<CertificateWrapperModel> {
    if (this.isVerifiable()) {
      return from(
        ElectronicHealthCertificateChecker.verifyWithTrustList(
          certificate,
          this.dscList!
        )
      ).pipe(
        map((val) => ({
          healthCertificate: val.healthCertificateClaim.hcert,
          isVerified: val.isVerified,
          qrCode: certificate,
        }))
      );
    } else {
      return of(ElectronicHealthCertificateChecker.decode(certificate)).pipe(
        map((healthCertificateClaim) => ({
          healthCertificate: healthCertificateClaim.hcert,
          isVerified: false,
          qrCode: certificate,
        }))
      );
    }
  }
}
