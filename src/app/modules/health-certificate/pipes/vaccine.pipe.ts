import { Pipe, PipeTransform } from '@angular/core';
import vaccineJSON from '../../../../assets/ehn-dcc-valuesets/vaccine-medicinal-product.json';

@Pipe({
  name: 'vaccine',
})
export class VaccinePipe implements PipeTransform {
  transform(value: string): string {
    const valueSets = vaccineJSON.valueSetValues;
    const vaccineObject = valueSets[value as keyof typeof valueSets];
    const vaccine = vaccineObject ? vaccineObject.display : value;
    return vaccine;
  }
}
