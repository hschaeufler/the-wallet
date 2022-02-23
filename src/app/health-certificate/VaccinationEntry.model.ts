import {CertificateEntryModel} from "./CertificateEntry.model";

export interface VaccinationEntryModel extends CertificateEntryModel {
  vaccineType: string,
  productName: string,
  manufacturer: string,
  doseNumber: number,
  totalDoses: number,
}
