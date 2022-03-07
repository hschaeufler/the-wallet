import { Pipe, PipeTransform } from '@angular/core';
import testTypeJSON from '../../../../assets/ehn-dcc-valuesets/test-type.json';

@Pipe({
  name: 'testType',
})
export class TestTypePipe implements PipeTransform {
  transform(value: string): string {
    const valueSets = testTypeJSON.valueSetValues;
    const testTypeObject = valueSets[value as keyof typeof valueSets];
    const testType = testTypeObject ? testTypeObject.display : value;
    return testType;
  }
}
