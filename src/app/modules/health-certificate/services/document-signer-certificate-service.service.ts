import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TrustListModel } from 'covid-certificate-checker/dist/lib/models/TrustList.model';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { PlatformLocation } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DocumentSignerCertificateServiceService {
  constructor(
    private http: HttpClient,
    private platformLocation: PlatformLocation
  ) {}

  getDSCList(): Observable<TrustListModel> {
    const trustList =
      this.platformLocation.getBaseHrefFromDOM() + environment.trustListURL;
    return this.http.get(trustList, { responseType: 'text' }).pipe(
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
