import { Injectable } from '@angular/core';
const base45 = require('base45');

@Injectable({
  providedIn: 'root'
})
/*
* See: https://github.com/ehn-dcc-development/ehn-sign-verify-javascript-trivial/blob/main/cose_verify.js
* */
export class CovidCertificateService {

  constructor() {

  }

  decodeCertificate(certificate: string) {
    certificate
  }

  //see: https://github.com/btielen/covid-certificate/blob/7f8631a2e0bdc5debf5c9877858d71ffd8ade329/src/parse/strip_header.ts#L1
  removeHeader(certificate: string){
    if(certificate.startsWith("HC1:")) {
      return certificate.substring(4);
    }
    throw new DOMException("No valid Covpass!");
  }

  decodeBase45(encodedMessage: string){
    return base45.decodeBase45(encodedMessage);
  }
}
