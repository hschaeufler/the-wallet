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

  writeFile(
    file: File,
    suggestedName?: string,
    types?: FilePickerAcceptType[],
    excludeAcceptAllOption?: boolean
  ): Observable<void> {
    return from(
      window.showSaveFilePicker({
        suggestedName: suggestedName,
        types: types,
        excludeAcceptAllOption: excludeAcceptAllOption || true,
      })
    ).pipe(
      concatMap((fileHandle) => from(fileHandle.createWritable())),
      concatMap((writable) =>
        from(writable.write(file)).pipe(map(() => writable))
      ),
      concatMap((writable) => from(writable.close()))
    );
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
