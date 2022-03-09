import { Component, Input, OnInit } from '@angular/core';
import { PkpassWrapperModel } from '../../../PkpassWrapper.model';

@Component({
  selector: 'the-wallet-pkpass-card-header',
  template: `
    <ng-container *ngIf="value">
      <mat-card-header class="pkpass-card-header">
        <button
          *ngIf="!value.logo; else pkpasslogo"
          mat-card-avatar
          mat-fab-mini
          disabled
          class="certificate-header-avatar"
        >
          <mat-icon aria-label="Pass Icon"> airplane_ticket</mat-icon>
        </button>
        <mat-card-title>{{
          value.passData.logoText || value.passType
        }}</mat-card-title>
        <mat-card-subtitle class="secondary-text">{{
          value.passData.logoText ? value.passType : ''
        }}</mat-card-subtitle>
        <the-wallet-pkpass-header-field-list
          [fields]="value.passFields.headerFields"
          class="secondary-text pkpass-card-header-field-list"
        ></the-wallet-pkpass-header-field-list>
        <div></div>
      </mat-card-header>
      <ng-template #pkpasslogo>
        <the-wallet-blob-image
          aria-label="PKPASS Logo"
          [blob]="value.logo"
          class="pkpass-header-logo"
        ></the-wallet-blob-image>
      </ng-template>
    </ng-container>
  `,
  styleUrls: ['./pkpass-card-header.component.scss'],
})
export class PkpassCardHeaderComponent {
  @Input()
  value?: PkpassWrapperModel;
}
