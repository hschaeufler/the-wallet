import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(
    value: string | undefined | number,
    maxLength: number
  ): string | undefined {
    if (typeof value === 'number') {
      value = value + '';
    }
    return value && value.length > maxLength
      ? value.substring(0, maxLength) + '...'
      : value;
  }
}
