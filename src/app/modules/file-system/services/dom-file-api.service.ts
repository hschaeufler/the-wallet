import { Injectable } from '@angular/core';
import { FileSystemService } from './FileSystem.service';
import {
  delay,
  fromEvent,
  map,
  Observable,
  race,
  take,
  throwError,
} from 'rxjs';
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
      //Browsers does not send a change event when the file picker is closed.
      const blob$ = fromEvent(inputElement, 'change').pipe(
        take(1),
        map(() => {
          const fileList = inputElement.files;
          if (!fileList || fileList.length < 1) {
            throw new DOMException('No File selected!');
          }
          return Array.from(fileList);
        })
      );
      inputElement.click();
      return blob$;
    } catch (e) {
      return throwError(() => e);
    }
  }
}
