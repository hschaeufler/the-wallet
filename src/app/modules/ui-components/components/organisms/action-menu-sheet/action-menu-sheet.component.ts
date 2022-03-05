import {Component, Inject} from '@angular/core';
import {
  ActionListItemModel
} from "../../../ActionListItem.model";
import {MAT_BOTTOM_SHEET_DATA} from "@angular/material/bottom-sheet";

@Component({
  selector: 'the-wallet-action-menu-sheet',
  template: `
    <the-wallet-action-menu [actionList]="actionList"></the-wallet-action-menu>
  `,
  styleUrls: ['./action-menu-sheet.component.scss']
})
export class ActionMenuSheetComponent {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public actionList: ActionListItemModel[]) { }
}
