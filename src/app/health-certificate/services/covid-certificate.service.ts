import {Injectable, OnInit} from '@angular/core';
import ElectronicHealthCertificateChecker from "covid-certificate-checker";
import {from, Observable, of, throwError} from "rxjs";
import {HealthCertificateClaim} from "covid-certificate-checker/dist/lib/models/HealthCertificateClaim";
import {TrustListModel} from "covid-certificate-checker/dist/lib/models/TrustList.model";
import {DocumentSignerCertificateServiceService} from "./document-signer-certificate-service.service";

@Injectable({
  providedIn: 'root'
})
export class CovidCertificateService {

  dscList?: TrustListModel;

  constructor(
    private documentSignerCertificateService: DocumentSignerCertificateServiceService
  ) {
    this.documentSignerCertificateService.getDSCList().subscribe(
      {
        next: dscList => this.dscList = dscList,
        error: err => console.log("No DSCList ascertainable", err),
      }
    );
  }

  decodeCertificate(certificate: string) {
    const hcert = ElectronicHealthCertificateChecker.decode(certificate);
    return hcert;
  }

  isVerifiable() {
    return !!this.dscList && ElectronicHealthCertificateChecker.supportsWebCryptoApi();
  }

  decode(certificate: string): Observable<{
    healthCertificateClaim: HealthCertificateClaim,
    isVerified: boolean
  }> {
    if (this.isVerifiable()) {
      return from(ElectronicHealthCertificateChecker.verifyWithTrustList(certificate, this.dscList!));
    } else {
      const hcert = ElectronicHealthCertificateChecker.decode(certificate);
      return of({
        healthCertificateClaim: hcert,
        isVerified: false
      });
    }
  }


}
