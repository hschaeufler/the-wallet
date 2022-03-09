import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileToShareData',
})
export class FileToShareDataPipe implements PipeTransform {
  transform(value: File, text: string, title: string): ShareData {
    return {
      files: [value],
      text: text,
      title: title,
    };
  }
}
