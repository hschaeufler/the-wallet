import { Pipe, PipeTransform } from '@angular/core';
import vaccineManufacturerJSON from '../../../../assets/ehn-dcc-valuesets/vaccine-mah-manf.json';

@Pipe({
  name: 'vaccineManufacturer',
})
export class VaccineManufacturerPipe implements PipeTransform {
  transform(value: string): string {
    const valueSets = vaccineManufacturerJSON.valueSetValues;
    const manufacturerObject = valueSets[value as keyof typeof valueSets];
    const vaccine = manufacturerObject ? manufacturerObject.display : value;
    return vaccine;
  }
}
