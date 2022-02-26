import { Injectable } from '@angular/core';
import {NgForage} from "ngforage";
import {DocumentModel} from "./Document.model";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentStoreService {

  constructor(private readonly ngForage: NgForage) {}

  getItems(id: string): Observable<DocumentModel | null> {
    return from(this.ngForage.getItem<DocumentModel>(id));
  }

  getItem(id: string): Observable<DocumentModel | null> {
    return from(this.ngForage.getItem<DocumentModel>(id));
  }

  setItem(id: string, document: DocumentModel) {
    return from(this.ngForage.setItem<DocumentModel>(id, document));
  }

}
