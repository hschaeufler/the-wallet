import { Injectable } from '@angular/core';
import { FileSystemService } from './FileSystem.service';
import { fromEvent, map, Observable } from 'rxjs';
import { filePickerAcceptTypesToAcceptString } from './dom-file-api.utils';

@Injectable({
  providedIn: 'root',
})
export class DomFileApiService implements FileSystemService {
  constructor() {}

  readFiles(
    types?: FilePickerAcceptType[],
    allowMultipleFiles?: boolean
  ): Observable<Blob[]> {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.multiple = allowMultipleFiles || false;
    inputElement.accept = types
      ? filePickerAcceptTypesToAcceptString(types)
      : '';
    const blob$ = fromEvent(inputElement, 'change').pipe(
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
  }
}
