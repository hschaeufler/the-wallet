import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { readPKPASS } from './pkpass.utils';
import { PkpassWrapperModel } from '../PkpassWrapper.model';

@Injectable({
  providedIn: 'root',
})
export class PkpassService {
  constructor() {}

  readPkpass(file: File): Observable<PkpassWrapperModel> {
    return from(readPKPASS(file));
  }
}
