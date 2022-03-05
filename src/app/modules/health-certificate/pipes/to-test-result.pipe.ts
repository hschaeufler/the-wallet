import { Pipe, PipeTransform } from '@angular/core';
import testResultJSON from '../../../../assets/ehn-dcc-valuesets/test-result.json';

@Pipe({
  name: 'toTestResult',
})
export class ToTestResultPipe implements PipeTransform {
  transform(value: string): string {
    const valueSets = testResultJSON.valueSetValues;
    const testResultObject = valueSets[value as keyof typeof valueSets];
    const testResult = testResultObject ? testResultObject.display : value;
    return testResult;
  }
}
