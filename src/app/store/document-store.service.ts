import {Injectable} from '@angular/core';
import {NgForage} from "ngforage";
import {from, Observable, Subject, tap} from "rxjs";
import {DocumentModel} from '../models/Document.model';
import {v4 as uuid} from 'uuid';
import {DocumentChange} from "../models/DocumentModelChange.type";

@Injectable({
  providedIn: 'root'
})
export class DocumentStoreService {


  documentChangeSource: Subject<DocumentChange> = new Subject<DocumentChange>();
  documentChange$ = this.documentChangeSource.asObservable();

  constructor(private readonly ngForage: NgForage) {
  }

  getDocuments(): Observable<DocumentModel> {
    const documentSource = new Subject<DocumentModel>();
    const document$ = documentSource.asObservable();

    this.ngForage.iterate<DocumentModel, void>((document, key, number) => {
      documentSource.next(document);
    }).then(() => {
      documentSource.complete();
    }).catch((err) => {
      documentSource.error(err);
    });
    return document$;
  }

  getDocument(id: string): Observable<DocumentModel | null> {
    return from(this.ngForage.getItem<DocumentModel>(id));
  }

  updateDocument(id: string, document: DocumentModel) {
    document.id = id;
    return from(this.ngForage.setItem<DocumentModel>(id, document)).pipe(
      tap(resultDocument => this.documentChangeSource.next({id: resultDocument.id, document: resultDocument}))
    );
  }

  saveDocument(document: DocumentModel) {
    document.id = uuid();
    return from(this.ngForage.setItem<DocumentModel>(document.id, document)).pipe(
      tap(resultDocument => this.documentChangeSource.next({id: resultDocument.id, document: resultDocument}))
    );
  }

  deleteDocument(id: string) {
    return from(this.ngForage.removeItem(id)).pipe(
      tap(() => this.documentChangeSource.next({id: id, document: null}))
    );
  }

}
