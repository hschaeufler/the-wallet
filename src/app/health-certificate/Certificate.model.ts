import {CertificateTypeEnum} from "./CertificateType.enum";
import {CertificateEntryModel} from "./CertificateEntry.model";
import {PersonNameModel} from "./PersonName.model";

export interface CertificateModel {
  certificateType: CertificateTypeEnum,
  personName: PersonNameModel,
  birthDate: Date,
  certificateEntry: CertificateEntryModel,
  qrCodeContent: string,
}
