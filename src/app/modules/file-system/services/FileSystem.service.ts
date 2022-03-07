import { Observable } from 'rxjs';

export abstract class FileSystemService {
  abstract readFiles(
    types?: FilePickerAcceptType[],
    allowMultipleFiles?: boolean
  ): Observable<File[]>;
}
