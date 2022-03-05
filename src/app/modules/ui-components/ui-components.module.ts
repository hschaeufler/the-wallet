import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {IconButtonComponent} from "./components/atoms/icon-button/icon-button.component";
import {ActionMenuComponent} from "./components/molecules/action-menu/action-menu.component";
import {MatListModule} from "@angular/material/list";
import {ActionMenuSheetComponent} from "./components/organisms/action-menu-sheet/action-menu-sheet.component";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";



@NgModule({
  declarations: [
    IconButtonComponent,
    ActionMenuComponent,
    ActionMenuSheetComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatBottomSheetModule
  ],
  exports: [
    IconButtonComponent,
    ActionMenuComponent,
    ActionMenuSheetComponent
  ]
})
export class UiComponentsModule { }
