import { DocumentTypeEnum } from './DocumentType.enum';

export interface DocumentModel {
  id: string;
  type: DocumentTypeEnum;
  content: any;
}
