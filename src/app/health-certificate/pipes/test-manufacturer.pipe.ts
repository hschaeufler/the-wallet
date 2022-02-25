import { Pipe, PipeTransform } from '@angular/core';
import testManufaturerJSON from "../../../assets/ehn-dcc-valuesets/test-manf.json";

@Pipe({
  name: 'testManufacturer'
})
export class TestManufacturerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const valueSets = testManufaturerJSON.valueSetValues;
    const testManufaturerObject = valueSets[value as keyof typeof valueSets];
    const testManufacturer = testManufaturerObject ? testManufaturerObject.display : value;
    return testManufacturer;
  }

}
