import { Pipe, PipeTransform } from '@angular/core';
import vaccineTypeJSON from '../../../../assets/ehn-dcc-valuesets/vaccine-prophylaxis.json';

@Pipe({
  name: 'vaccineType',
})
export class VaccineTypePipe implements PipeTransform {
  transform(value: string): string {
    const valueSets = vaccineTypeJSON.valueSetValues;
    const vaccineTypeObject = valueSets[value as keyof typeof valueSets];
    const vaccineType = vaccineTypeObject ? vaccineTypeObject.display : value;
    return vaccineType;
  }
}
