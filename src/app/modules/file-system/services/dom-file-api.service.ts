import { Injectable } from '@angular/core';
import { FileSystemService } from './FileSystem.service';
import { delay, fromEvent, map, Observable, race, throwError } from 'rxjs';
import { filePickerAcceptTypesToAcceptString } from './dom-file-api.utils';
import { blobToDataURL } from '../../commons/utils/image-conversion.utils';

@Injectable({
  providedIn: 'root',
})
export class DomFileApiService implements FileSystemService {
  constructor() {}

  writeFile(file: File, suggestedName?: string): Observable<void> {
    try {
      const aElement = document.createElement('a');
      return blobToDataURL(file).pipe(
        map((dataURL) => {
          aElement.href = dataURL;
          aElement.download = suggestedName || '';
          aElement.click();
          return;
        })
      );
    } catch (e) {
      return throwError(() => e);
    }
  }

  readFiles(
    types?: FilePickerAcceptType[],
    allowMultipleFiles?: boolean
  ): Observable<File[]> {
    try {
      const inputElement = document.createElement('input');
      inputElement.type = 'file';
      inputElement.multiple = allowMultipleFiles || false;
      inputElement.accept = types
        ? filePickerAcceptTypesToAcceptString(types)
        : '';
      const blob$ = race(
        fromEvent(inputElement, 'change').pipe(
          map(() => {
            const fileList = inputElement.files;
            if (!fileList || fileList.length < 1) {
              throw new DOMException('No File selected!');
            }
            return Array.from(fileList);
          })
        ),
        /*
         * Firefox does not send a change event when the file picker is closed.
         * If 1000 miliseconds after firing the focusin event the change event was not fired,
         * we assume that the user did not make a file selection.
         * */
        fromEvent(window, 'focusin').pipe(
          delay(1000),
          map((event) => {
            throw new DOMException('No File selected!');
          })
        )
      );
      inputElement.click();
      return blob$;
    } catch (e) {
      return throwError(() => e);
    }
  }
}
