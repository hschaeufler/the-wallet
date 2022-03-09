import { Component, Input } from '@angular/core';
import { PassStructure } from '@pkpass/types/src/low-level';

@Component({
  selector: 'the-wallet-transit-type-icon',
  template: `
    <mat-icon class="transit-type-icon">{{
      transitType | pkpassTransitTypeIcon
    }}</mat-icon>
  `,
  styleUrls: ['./transit-type-icon.component.scss'],
})
export class TransitTypeIconComponent {
  @Input()
  transitType?: PassStructure.Transit.Type;
}
