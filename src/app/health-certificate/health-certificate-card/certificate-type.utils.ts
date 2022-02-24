import {HealthCertificateModel} from "covid-certificate-checker/dist/lib/models/HealthCertificate.model";
import {CertificateTypeEnum} from "../CertificateType.enum";

export function getCertificateType(hcert: HealthCertificateModel): CertificateTypeEnum{
  if(hcert.v && hcert.v.length > 0) {
    return CertificateTypeEnum.VACCINATION;
  }
  if(hcert.t && hcert.t.length > 0) {
    return  CertificateTypeEnum.TEST;
  }
  if(hcert.r && hcert.r.length > 0) {
    return CertificateTypeEnum.RECOVERY;
  }
  return CertificateTypeEnum.NOTDETERMINABLE;
}
