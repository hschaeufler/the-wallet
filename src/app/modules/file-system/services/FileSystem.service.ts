import { Observable } from 'rxjs';

export abstract class FileSystemService {
  abstract readFiles(
    types?: FilePickerAcceptType[],
    allowMultipleFiles?: boolean
  ): Observable<File[]>;

  abstract writeFile(
    file: File,
    suggestedName?: string,
    types?: FilePickerAcceptType[],
    excludeAcceptAllOption?: boolean
  ): Observable<void>;
}
