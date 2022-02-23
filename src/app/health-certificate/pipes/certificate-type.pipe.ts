import { Pipe, PipeTransform } from '@angular/core';
import {HealthCertificateModel} from "covid-certificate-checker/dist/lib/models/HealthCertificate.model";

@Pipe({
  name: 'certificateTypeName'
})
export class CertificateTypeNamePipe implements PipeTransform {

  static readonly VACCINATION_DISPLAY_NAME = "Vaccination";
  static readonly TEST_DISPLAY_NAME = "Test";
  static readonly RECOVERY_DISPLAY_NAME = "Recovery";


  transform(value: HealthCertificateModel): string {
    if(value.v && value.v.length > 0) {
      return CertificateTypeNamePipe.VACCINATION_DISPLAY_NAME;
    }
    if(value.t && value.t.length > 0) {
      return CertificateTypeNamePipe.TEST_DISPLAY_NAME;
    }
    if(value.r && value.r.length > 0) {
      return CertificateTypeNamePipe.RECOVERY_DISPLAY_NAME;
    }
    return "";
  }

}
