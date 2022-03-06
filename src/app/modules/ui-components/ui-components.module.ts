import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconButtonComponent } from './components/atoms/icon-button/icon-button.component';
import { ActionMenuComponent } from './components/molecules/action-menu/action-menu.component';
import { MatListModule } from '@angular/material/list';
import { ActionMenuSheetComponent } from './components/organisms/action-menu-sheet/action-menu-sheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpinnerComponent } from './components/atoms/spinner/spinner.component';

@NgModule({
  declarations: [
    IconButtonComponent,
    ActionMenuComponent,
    ActionMenuSheetComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatBottomSheetModule,
    MatSnackBarModule,
  ],
  exports: [
    IconButtonComponent,
    ActionMenuComponent,
    ActionMenuSheetComponent,
    SpinnerComponent,
  ],
})
export class UiComponentsModule {}
