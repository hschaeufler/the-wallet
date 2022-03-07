import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-wallet-icon-button',
  template: `
    <button mat-icon-button>
      <mat-icon><ng-content></ng-content></mat-icon>
    </button>
  `,
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {}
