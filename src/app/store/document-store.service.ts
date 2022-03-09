import { Injectable } from '@angular/core';
import { DedicatedInstanceFactory, Driver, NgForage } from 'ngforage';
import { from, Observable, Subject, tap } from 'rxjs';
// @ts-ignore
import memoryStorageDriver from 'localforage-memoryStorageDriver/dist/localforage-memoryStorageDriver.es6';
import { DocumentModel } from '../models/Document.model';
import { v4 as uuid } from 'uuid';
import { DocumentChange } from '../models/DocumentModelChange.type';
import { SortStoreService } from './sort-store.service';

@Injectable({
  providedIn: 'root',
})
export class DocumentStoreService {
  private readonly ngForage: NgForage;

  documentChangeSource: Subject<DocumentChange> = new Subject<DocumentChange>();
  documentChange$ = this.documentChangeSource.asObservable();

  constructor(
    private readonly dedicatedInstanceFactory: DedicatedInstanceFactory,
    private readonly sortStore: SortStoreService
  ) {
    //Custom Config for NG-Forage is necessary because we need two StoreInstance. One for this Service and one for sort-store.
    //See: https://github.com/Alorel/ngforage/issues/53
    this.ngForage = dedicatedInstanceFactory.createNgForage({
      name: 'DocumentStore',
      driver: [
        Driver.INDEXED_DB,
        Driver.WEB_SQL,
        Driver.LOCAL_STORAGE,
        memoryStorageDriver,
      ],
    });
  }

  getDocuments(): Observable<DocumentModel> {
    const documentSource = new Subject<DocumentModel>();
    const document$ = documentSource.asObservable();

    this.ngForage
      .iterate<DocumentModel, void>((document, key, number) => {
        documentSource.next(document);
      })
      .then(() => {
        documentSource.complete();
      })
      .catch((err) => {
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
      tap((resultDocument) =>
        this.documentChangeSource.next({
          id: resultDocument.id,
          document: resultDocument,
        })
      )
    );
  }

  saveDocument(document: DocumentModel) {
    console.log(document);
    document.id = document.id ? document.id : uuid();
    return from(
      this.ngForage.setItem<DocumentModel>(document.id, document)
    ).pipe(
      tap((resultDocument) => {
        console.log(resultDocument);
      }),
      tap((resultDocument) =>
        this.documentChangeSource.next({
          id: resultDocument.id,
          document: resultDocument,
        })
      ),
      tap(() => {
        this.sortStore.addKey(document.id).subscribe();
      })
    );
  }

  deleteDocument(id: string) {
    return from(this.ngForage.removeItem(id)).pipe(
      tap(() => this.documentChangeSource.next({ id: id, document: null })),
      tap(() => {
        this.sortStore.removeKey(id).subscribe();
      })
    );
  }
}
