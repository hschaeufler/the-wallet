import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TrustListModel } from 'covid-certificate-checker/dist/lib/models/TrustList.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentSignerCertificateServiceService {
  configURL = 'https://de.test.dscg.ubirch.com/trustList/DSC/';

  constructor(private http: HttpClient) {}

  getDSCList(): Observable<TrustListModel> {
    return this.http.get(this.configURL, { responseType: 'text' }).pipe(
      map((result) => {
        const certificates = result.match(/({\"certificates\")[\s\S]*$/);
        if (certificates && certificates.length > 0) {
          return JSON.parse(certificates[0]) as TrustListModel;
        } else {
          throw new DOMException('No valid DocumentSignerCertificateList');
        }
      })
    );
  }
}
