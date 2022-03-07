import { Pipe, PipeTransform } from '@angular/core';
import diseaseTargetJSON from '../../../../assets/ehn-dcc-valuesets/disease-agent-targeted.json';

@Pipe({
  name: 'targetDisease',
})
export class TargetDiseasePipe implements PipeTransform {
  transform(value: string): string {
    const valueSets = diseaseTargetJSON.valueSetValues;
    const diseaseObject = valueSets[value as keyof typeof valueSets];
    const disease = diseaseObject ? diseaseObject.display : value;
    return disease;
  }
}
