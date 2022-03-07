import { Injectable } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { ActionMenuSheetComponent } from '../components/organisms/action-menu-sheet/action-menu-sheet.component';
import { ActionListItemModel } from '../ActionListItem.model';

@Injectable({
  providedIn: 'root',
})
export class ActionMenuSheetService {
  private bottomSheetRef?: MatBottomSheetRef<ActionMenuSheetComponent, any>;

  constructor(private bottomSheet: MatBottomSheet) {}

  open(actionList: ActionListItemModel[]) {
    this.bottomSheetRef = this.bottomSheet.open<
      ActionMenuSheetComponent,
      ActionListItemModel[],
      any
    >(ActionMenuSheetComponent, {
      data: actionList,
    });
  }

  close() {
    if (this.bottomSheetRef && this.bottomSheetRef) {
      this.bottomSheetRef.dismiss();
      this.bottomSheetRef = undefined;
    }
  }
}
