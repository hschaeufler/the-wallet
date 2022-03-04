import { Injectable } from '@angular/core';
import {concatMap, from, map, Subject, tap} from "rxjs";
import {DedicatedInstanceFactory, Driver, NgForage} from "ngforage";
// @ts-ignore
import memoryStorageDriver from "localforage-memoryStorageDriver/dist/localforage-memoryStorageDriver.es6";

@Injectable({
  providedIn: 'root'
})
export class SortStoreService {

  static readonly SORT_ORDER_KEY = "SORT_ORDER";

  sortOrderSource: Subject<string[]> = new Subject<string[]>();
  sortOrder$ = this.sortOrderSource.asObservable();

  constructor(
    private readonly ngForage: NgForage,
    private readonly dedicatedInstanceFactory: DedicatedInstanceFactory,
    ) {
    this.ngForage = dedicatedInstanceFactory.createNgForage({
      name: "SortStore",
      driver: [
        Driver.INDEXED_DB,
        Driver.WEB_SQL,
        Driver.LOCAL_STORAGE,
        memoryStorageDriver
      ]
    });
  }

  updateSortOrder(ids: string[]) {
    return from(this.ngForage.setItem<string[]>(SortStoreService.SORT_ORDER_KEY, ids)).pipe(
      tap(sortOrder => this.sortOrderSource.next(sortOrder))
    );
  }

  addKey(id: string) {
    return this.getSortOrder().pipe(
      concatMap(sortOrder => {
        sortOrder.push(id);
        return this.updateSortOrder(sortOrder);
      })
    );
  }

  removeKey(id: string) {
    return this.getSortOrder().pipe(
      map(sortOrder => sortOrder.filter(key => key !== id)),
      concatMap(sortOrder => this.updateSortOrder(sortOrder)),
    )
  }

  getSortOrder() {
    return from(this.ngForage.getItem<string[]>(SortStoreService.SORT_ORDER_KEY)).pipe(
      map(sortOrder => sortOrder ? sortOrder : [])
    );
  }
}
