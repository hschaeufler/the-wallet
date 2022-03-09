import { Pipe, PipeTransform } from '@angular/core';
import { PassStructure } from '@pkpass/types/src/low-level';

@Pipe({
  name: 'pkpassTransitTypeIcon',
})
export class PkpassTransitTypeIconPipe implements PipeTransform {
  transform(
    transitType: PassStructure.Transit.Type | undefined
  ): string | undefined {
    switch (transitType) {
      case PassStructure.Transit.Type.Air:
        return 'connecting_airports';
      case PassStructure.Transit.Type.Boat:
        return 'directions_boat';
      case PassStructure.Transit.Type.Bus:
        return 'directions_bus';
      case PassStructure.Transit.Type.Train:
        return 'directions_bus';
      case PassStructure.Transit.Type.Generic:
        return 'multiple_stop';
      default:
        return transitType;
    }
  }
}
