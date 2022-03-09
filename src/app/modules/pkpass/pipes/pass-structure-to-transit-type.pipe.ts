import { Pipe, PipeTransform } from '@angular/core';
import { PassStructure } from '@pkpass/types/src/low-level/structure';
import Transit = PassStructure.Transit;

@Pipe({
  name: 'passStructureToTransitType',
})
export class PassStructureToTransitTypePipe implements PipeTransform {
  transform(value: PassStructure): PassStructure.Transit.Type | undefined {
    if ('transitType' in value) {
      return (value as Transit).transitType;
    }
    return undefined;
  }
}
