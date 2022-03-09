import { Component, Input } from '@angular/core';
import { Field } from '@pkpass/types/src/field';
import { PassStructure } from '@pkpass/types/src/low-level/structure';

@Component({
  selector: 'the-wallet-boarding-pass-primary-field-list',
  template: `
    <div
      class="boarding-pass-primary-field-list"
      *ngIf="fields && fields.length > 1"
    >
      <the-wallet-boarding-pass-header-field
        [field]="fields![0]"
      ></the-wallet-boarding-pass-header-field>
      <the-wallet-transit-type-icon
        [transitType]="transitType"
      ></the-wallet-transit-type-icon>
      <the-wallet-boarding-pass-header-field
        [field]="fields![1]"
      ></the-wallet-boarding-pass-header-field>
    </div>
    <ng-container *ngIf="fields && fields.length > 2">
      <the-wallet-pkpass-field-list
        [fields]="fields.slice(2)"
      ></the-wallet-pkpass-field-list>
    </ng-container>
  `,
  styleUrls: ['./boarding-pass-primary-field-list.component.scss'],
})
export class BoardingPassPrimaryFieldListComponent {
  @Input()
  fields?: Field[] = [];

  @Input()
  transitType?: PassStructure.Transit.Type;
}
