import {Injectable, OnInit} from '@angular/core';
import ElectronicHealthCertificateChecker from "covid-certificate-checker";
import {from, map, Observable, of} from "rxjs";
import {HealthCertificateClaim} from "covid-certificate-checker/dist/lib/models/HealthCertificateClaim";
import {TrustListModel} from "covid-certificate-checker/dist/lib/models/TrustList.model";
import {DocumentSignerCertificateServiceService} from "./document-signer-certificate-service.service";
import {CertificateModel} from "covid-certificate-checker/dist/lib/models/Certificate.model";
import {HealthCertificateModel} from "covid-certificate-checker/dist/lib/models/HealthCertificate.model";

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
    const hcert = ElectronicHealthCertificateChecker.decode(certificate).hcert;
    return hcert;
  }

  isVerifiable() {
    return !!this.dscList && ElectronicHealthCertificateChecker.supportsWebCryptoApi();
  }

  decode(certificate: string): Observable<{
    healthCertificate: HealthCertificateModel,
    isVerified: boolean
  }> {
    if (this.isVerifiable()) {
      return from(ElectronicHealthCertificateChecker.verifyWithTrustList(certificate, this.dscList!))
        .pipe(map(val => ({
          healthCertificate: val.healthCertificateClaim.hcert,
          isVerified: val.isVerified,
        })));
    } else {
      const healthCertificateClaim = ElectronicHealthCertificateChecker.decode(certificate);
      return of({
        healthCertificate: healthCertificateClaim.hcert,
        isVerified: false
      });
    }
  }


}
