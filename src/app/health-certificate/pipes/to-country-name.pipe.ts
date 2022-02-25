import { Pipe, PipeTransform } from '@angular/core';
import countryCodes from "../../../assets/ehn-dcc-valuesets/country-2-codes.json";

@Pipe({
  name: 'toCountryName'
})
export class ToCountryNamePipe implements PipeTransform {

  transform(value: string): string {
    const valueSets = countryCodes.valueSetValues;
    const countryCode = valueSets[value as keyof typeof valueSets];
    const country = countryCode ? countryCode.display : value;
    return country;
  }

}
