import {CertificateEntryModel} from "./CertificateEntry.model";

export interface TestEntryModel extends CertificateEntryModel {
  testType: string,
  testName?: string,
  manufacturer?: string,
  testResult: string,
  testCenter: string,
}
