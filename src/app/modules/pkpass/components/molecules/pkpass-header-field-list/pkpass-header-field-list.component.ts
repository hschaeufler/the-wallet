import { Component, Input } from '@angular/core';
import { Field } from '@pkpass/types/src/field';

@Component({
  selector: 'the-wallet-pkpass-header-field-list',
  template: `
    <div class="pkpass-header-field-list">
      <div *ngFor="let field of fields" class="pkpass-header-field-list-item">
        <div class="pkpass-header-field-list-item-line">{{ field.value }}</div>
        <div class="pkpass-header-field-list-item-line">{{ field.label }}</div>
      </div>
    </div>
  `,
  styleUrls: ['./pkpass-header-field-list.component.scss'],
})
export class PkpassHeaderFieldListComponent {
  @Input()
  fields?: Field[];
}
