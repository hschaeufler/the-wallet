import { Pipe, PipeTransform } from '@angular/core';
import {CertificateTypeEnum} from "../CertificateType.enum";
import {HealthCertificateModel} from "covid-certificate-checker/dist/lib/models/HealthCertificate.model";
import {getCertificateType} from "../components/organisms/health-certificate-card/certificate-type.utils";

@Pipe({
  name: 'certificateType'
})
export class CertificateTypePipe implements PipeTransform {

  transform(hcert: HealthCertificateModel): CertificateTypeEnum {
    return getCertificateType(hcert);
  }

}
