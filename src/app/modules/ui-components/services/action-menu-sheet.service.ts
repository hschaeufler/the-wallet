import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActionMenuSheetComponent } from '../components/organisms/action-menu-sheet/action-menu-sheet.component';
import { ActionListItemModel } from '../ActionListItem.model';

@Injectable({
  providedIn: 'root',
})
export class ActionMenuSheetService {
  constructor(private bottomSheet: MatBottomSheet) {}

  open(actionList: ActionListItemModel[]) {
    this.bottomSheet.open<ActionMenuSheetComponent, ActionListItemModel[], any>(
      ActionMenuSheetComponent,
      {
        data: actionList,
      }
    );
  }
}
