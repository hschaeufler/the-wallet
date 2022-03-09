import { Component, Input, OnInit } from '@angular/core';
import { Field } from '@pkpass/types/src/field';

@Component({
  selector: 'the-wallet-boarding-pass-primary-field',
  template: `
    <mat-list-item class="boarding-pass-primary-field" *ngIf="field">
      <h1 class="boarding-pass-primary-field-line">{{ field.value || '' }}</h1>
      <p class="boarding-pass-primary-field-line secondary-text">
        {{ field.label || '' }}
      </p>
    </mat-list-item>
  `,
  styleUrls: ['./boarding-pass-primary-field.component.scss'],
})
export class BoardingPassPrimaryFieldComponent {
  @Input()
  field?: Field;
}
