import { Injectable } from '@angular/core';
import { concatMap, from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileSystemService {
  constructor() {}

  readfile(options?: FilePickerOptions): Observable<Blob> {
    return from(window.showOpenFilePicker(options)).pipe(
      concatMap(([fileHandle]) => from(fileHandle.getFile())),
      concatMap((file) => from(file.arrayBuffer())),
      map((arrayBuffer) => new Blob([arrayBuffer]))
    );
  }
}
