import { Injectable } from '@angular/core';
import { concatMap, from, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileSystemService {
  constructor() {}

  readfile(options?: FilePickerOptions): Observable<Blob> {
    try {
      return from(window.showOpenFilePicker(options)).pipe(
        concatMap(([fileHandle]) => from(fileHandle.getFile())),
        concatMap((file) => from(file.arrayBuffer())),
        map((arrayBuffer) => new Blob([arrayBuffer]))
      );
    } catch (exception) {
      return throwError(() => exception);
    }
  }
}
