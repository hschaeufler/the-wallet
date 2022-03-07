import { HealthCertificateModel } from 'covid-certificate-checker/dist/lib/models/HealthCertificate.model';

export interface CertificateWrapperModel {
  qrCode: string;
  healthCertificate: HealthCertificateModel;
  isVerified: boolean;
}
