import {DocumentModel} from "./Document.model";

export type DocumentChange = {
  id: string,
  document: DocumentModel | null
};
