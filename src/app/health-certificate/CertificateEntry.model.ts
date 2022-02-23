import {CertificateTypeEnum} from "./CertificateType.enum";

export interface CertificateEntryModel {
  uniqueCertificateId: string;
  targetDisease: string;
  certificateIssuer: string;
  date: Date;
  country: string;
  certificateType: CertificateTypeEnum;
}
