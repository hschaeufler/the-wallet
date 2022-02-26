import {Pipe, PipeTransform} from '@angular/core';
import {getCertificateType} from "../health-certificate-card/certificate-type.utils";
import {CertificateTypeEnum} from "../CertificateType.enum";
import {HealthCertificateModel} from "covid-certificate-checker/dist/lib/models/HealthCertificate.model";
import {CertificateTypeNamePipe} from "./certificate-type-name.pipe";

@Pipe({
  name: 'toCertificateTypeIcon'
})
export class ToCertificateTypeIconPipe implements PipeTransform {

  static readonly VACCINATION_ICON = "vaccines";
  static readonly TEST_ICON = "policiy";
  static readonly RECOVERY_ICON = "health_and_safety";

  transform(value: HealthCertificateModel): unknown {
    const certificateType = getCertificateType(value);
    switch (certificateType) {
      case CertificateTypeEnum.VACCINATION:
        return ToCertificateTypeIconPipe.VACCINATION_ICON;
        break;
      case CertificateTypeEnum.TEST:
        return ToCertificateTypeIconPipe.TEST_ICON;
        break;
      case CertificateTypeEnum.RECOVERY:
        return ToCertificateTypeIconPipe.RECOVERY_ICON;
        break;
      default:
        return "";
        break;
    }
  }

}
