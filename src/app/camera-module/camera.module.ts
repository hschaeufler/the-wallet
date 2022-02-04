import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraControlStripComponent } from './camera-control-strip/camera-control-strip.component';
import { CameraVideoComponent } from "./camera-video/camera-video.component";
import { CameraDialogComponent } from './camera-dialog/camera-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    CameraVideoComponent,
    CameraControlStripComponent,
    CameraDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [
    CameraDialogComponent,
  ]
})
export class CameraModule { }
