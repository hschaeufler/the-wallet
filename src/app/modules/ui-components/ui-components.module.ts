import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {IconButtonComponent} from "./components/atoms/icon-button/icon-button.component";



@NgModule({
  declarations: [
    IconButtonComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    IconButtonComponent,
  ]
})
export class UiComponentsModule { }
