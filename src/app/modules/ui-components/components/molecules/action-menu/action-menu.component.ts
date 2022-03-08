import { Component, Input } from '@angular/core';
import { ActionListItemModel } from '../../../ActionListItem.model';

@Component({
  selector: 'the-wallet-action-menu',
  template: `
    <mat-action-list>
      <mat-list-item
        *ngFor="let actionItem of actionList"
        (click)="actionItem.action(actionItem)"
      >
        <mat-icon mat-list-icon>{{ actionItem.matIcon }}</mat-icon>
        <span mat-line>{{ actionItem.name }}</span>
      </mat-list-item>
    </mat-action-list>
  `,
  styleUrls: ['./action-menu.component.scss'],
})
export class ActionMenuComponent {
  @Input()
  actionList: ActionListItemModel[] = [];
}
