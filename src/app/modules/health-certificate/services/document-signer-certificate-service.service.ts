import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TrustListModel } from 'covid-certificate-checker/dist/lib/models/TrustList.model';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DocumentSignerCertificateServiceService {
  constructor(private http: HttpClient, private router: Router) {}

  getDSCList(): Observable<TrustListModel> {
    return this.http
      .get(environment.trustListURL, { responseType: 'text' })
      .pipe(
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
