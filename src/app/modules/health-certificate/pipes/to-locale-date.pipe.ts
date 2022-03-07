import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLocaleDate',
})
export class ToLocaleDatePipe implements PipeTransform {
  transform(value: string): string {
    try {
      const date = new Date(value);
      return date.toLocaleDateString();
    } catch (e) {
      console.error(e);
      return value;
    }
  }
}
