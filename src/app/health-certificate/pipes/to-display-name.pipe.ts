import { Pipe, PipeTransform } from '@angular/core';
import {PersonName} from "covid-certificate-checker/dist/lib/models/HealthCertificate.model";

@Pipe({
  name: 'toDisplayName'
})
export class ToDisplayNamePipe implements PipeTransform {

  transform(value: PersonName): string {
    const foreName = value.gn ? value.gn : "";
    const standardisedForename = value.gnt ? value.gn : "";
    const displayForeName = foreName ? foreName : standardisedForename;

    const surName = value.fn ? value.fn : "";
    const standardisedSurName = value.fnt ? value.fnt : "";
    const displaySurName = surName ? surName : standardisedSurName;

    return surName+ ", " + foreName;
  }

}
