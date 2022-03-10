import { Component, Input } from '@angular/core';
import { PkpassWrapperModel } from '../../../PkpassWrapper.model';
import { PassTypeEnum } from '../../../PassType.enum';

@Component({
  selector: 'the-wallet-pkpass-card',
  template: `
    <mat-card class="pkpass-card">
      <the-wallet-pkpass-card-header [value]="value">
      </the-wallet-pkpass-card-header>
      <the-wallet-pkpass-primary-fields
        [passType]="value.passType"
        [passFields]="value.passFields"
        *ngIf="value"
      >
      </the-wallet-pkpass-primary-fields>
      <mat-divider></mat-divider>
      <the-wallet-pkpass-barcode
        *ngIf="value"
        [barcode]="value.barcode"
        mat-card-image
      ></the-wallet-pkpass-barcode>
      <mat-divider></mat-divider>
      <mat-card-content *ngIf="value">
        <br />
        <h2>Details</h2>
        <mat-divider></mat-divider>
        <the-wallet-pkpass-field-list
          [fields]="value.passFields.secondaryFields"
        ></the-wallet-pkpass-field-list>
        <the-wallet-pkpass-field-list
          [fields]="value.passFields.auxiliaryFields"
        ></the-wallet-pkpass-field-list>
        <br />
        <the-wallet-default-expansion-panel
          *ngIf="value.passFields.backFields"
          title="Backside"
          [expanded]="false"
        >
          <the-wallet-pkpass-field-list
            [fields]="value.passFields.backFields"
          ></the-wallet-pkpass-field-list>
        </the-wallet-default-expansion-panel>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./pkpass-card.component.scss'],
})
export class PkpassCardComponent {
  passType = PassTypeEnum;

  @Input()
  value?: PkpassWrapperModel;
}
