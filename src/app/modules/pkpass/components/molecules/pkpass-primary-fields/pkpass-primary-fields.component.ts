import { Component, Input, OnInit } from '@angular/core';
import { PassTypeEnum } from '../../../PassType.enum';
import { PassStructure } from '@pkpass/types/src/low-level/structure';

@Component({
  selector: 'the-wallet-pkpass-primary-fields',
  template: `
    <ng-container *ngIf="passFields">
      <ng-container
        *ngIf="passType === passTypeEnum.BOARDINGPASS; else primaryfields"
      >
        <the-wallet-boarding-pass-primary-field-list
          [fields]="passFields.primaryFields"
          [transitType]="passFields | passStructureToTransitType"
        >
        </the-wallet-boarding-pass-primary-field-list>
      </ng-container>
      <ng-template #primaryfields>
        <h2>Primary Fields</h2>
        <the-wallet-pkpass-header-field-list
          [fields]="passFields.primaryFields"
        >
        </the-wallet-pkpass-header-field-list>
      </ng-template>
    </ng-container>
  `,
  styleUrls: ['./pkpass-primary-fields.component.scss'],
})
export class PkpassPrimaryFieldsComponent {
  passTypeEnum = PassTypeEnum;

  @Input()
  passType?: PassTypeEnum;

  @Input()
  passFields?: PassStructure;
}
