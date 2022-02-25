import {Pipe, PipeTransform} from '@angular/core';
import {HealthCertificateModel} from "covid-certificate-checker/dist/lib/models/HealthCertificate.model";
import {getCertificateType} from "../health-certificate-card/certificate-type.utils";
import {CertificateTypeEnum} from "../CertificateType.enum";

@Pipe({
  name: 'certificateTypeName'
})
export class CertificateTypeNamePipe implements PipeTransform {

  static readonly VACCINATION_DISPLAY_NAME = "Vaccination";
  static readonly TEST_DISPLAY_NAME = "Test";
  static readonly RECOVERY_DISPLAY_NAME = "Recovery";


  transform(value: HealthCertificateModel): string {
    const certificateType = getCertificateType(value);
    switch (certificateType) {
      case CertificateTypeEnum.VACCINATION:
        return CertificateTypeNamePipe.VACCINATION_DISPLAY_NAME;
        break;
      case CertificateTypeEnum.TEST:
        return CertificateTypeNamePipe.TEST_DISPLAY_NAME;
        break;
      case CertificateTypeEnum.RECOVERY:
        return CertificateTypeNamePipe.RECOVERY_DISPLAY_NAME;
        break;
      default:
        return "";
        break;
    }
  }

}
