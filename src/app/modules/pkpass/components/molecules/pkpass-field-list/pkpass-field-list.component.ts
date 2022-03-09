import { Component, Input } from '@angular/core';
import { Field } from '@pkpass/types/src/field';

@Component({
  selector: 'the-wallet-pkpass-field-list',
  template: `
    <mat-list>
      <ng-container *ngFor="let field of fields">
        <mat-list-item>
          <p mat-line>{{ field.label | shorten: DEFAULT_SHORT_VALUE }}</p>
          <h1 mat-line>
            {{ field.value | shorten: DEFAULT_SHORT_VALUE }}
          </h1>
        </mat-list-item>
        <mat-divider></mat-divider>
      </ng-container>
    </mat-list>
  `,
  styleUrls: ['./pkpass-field-list.component.scss'],
})
export class PkpassFieldListComponent {
  readonly DEFAULT_SHORT_VALUE = 40;

  @Input()
  fields?: Field[];
}
