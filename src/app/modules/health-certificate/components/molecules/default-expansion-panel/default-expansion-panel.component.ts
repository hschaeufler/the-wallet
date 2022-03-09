import { Component, Input } from '@angular/core';

@Component({
  selector: 'the-wallet-default-expansion-panel',
  template: `
    <mat-expansion-panel class="default-expansion-panel" [expanded]="expanded">
      <mat-expansion-panel-header expandedHeight="48px">
        <mat-panel-title>
          {{ title }}
        </mat-panel-title>
      </mat-expansion-panel-header>
      <ng-content></ng-content>
    </mat-expansion-panel>
  `,
  styleUrls: ['./default-expansion-panel.component.scss'],
})
export class DefaultExpansionPanelComponent {
  @Input()
  title = '';

  @Input()
  expanded = true;
}
