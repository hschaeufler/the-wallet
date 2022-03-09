import { Component, Input, OnInit } from '@angular/core';
import { Field } from '@pkpass/types/src/field';

@Component({
  selector: 'the-wallet-boarding-pass-header-field',
  template: `
    <mat-list-item class="boarding-pass-header-field" *ngIf="field">
      <h1 class="boarding-pass-header-field-line">{{ field.value || '' }}</h1>
      <p class="boarding-pass-header-field-line">{{ field.label || '' }}</p>
    </mat-list-item>
  `,
  styleUrls: ['./boarding-pass-header-field.component.scss'],
})
export class BoardingPassHeaderFieldComponent {
  @Input()
  field?: Field;
}
