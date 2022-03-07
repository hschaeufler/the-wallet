import { Injectable } from '@angular/core';
import { concatMap, forkJoin, from, map, Observable, throwError } from 'rxjs';
import { FileSystemService } from './FileSystem.service';
import { detectFileSystemAccessApi } from './file-system-access-api.utils';

@Injectable({
  providedIn: 'root',
})
export class FileSystemAccessApiService implements FileSystemService {
  constructor() {}

  isSupported() {
    return detectFileSystemAccessApi();
  }

  readFiles(
    types?: FilePickerAcceptType[],
    allowMultipleFiles?: boolean,
    excludeAcceptAllOption?: boolean
  ): Observable<File[]> {
    try {
      return from(
        window.showOpenFilePicker({
          multiple: allowMultipleFiles || false,
          excludeAcceptAllOption: excludeAcceptAllOption || true,
          types: types,
        })
      ).pipe(
        map((fileHandles) => {
          if (!fileHandles || fileHandles.length < 1) {
            throw new DOMException('No File selected!');
          }
          return fileHandles;
        }),
        concatMap((fileHandles) =>
          forkJoin(fileHandles.map((fileHandle) => from(fileHandle.getFile())))
        )
      );
    } catch (exception) {
      return throwError(() => exception);
    }
  }
}
