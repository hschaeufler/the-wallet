import { CertificateWrapperModel } from '../../../modules/health-certificate/CertificateWrapper.model';
import { DocumentModel } from '../../../models/Document.model';
import { DocumentTypeEnum } from '../../../models/DocumentType.enum';
import { v4 as uuid } from 'uuid';
import { PkpassWrapperModel } from '../../../modules/pkpass/PkpassWrapper.model';

export const mapCertificateWrapperToDocumentModel = (
  certificateWrapper: CertificateWrapperModel
): DocumentModel => {
  return {
    id: uuid(),
    content: certificateWrapper,
    type: DocumentTypeEnum.HEALTHCERTIFICATE,
  } as DocumentModel;
};

export const mapPkpassWrapperToDocumentModel = (
  pkpassWrapper: PkpassWrapperModel
): DocumentModel => {
  return {
    id: uuid(),
    content: pkpassWrapper,
    type: DocumentTypeEnum.PKPASS,
  } as DocumentModel;
};
