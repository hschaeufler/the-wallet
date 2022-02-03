import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraControlStripComponent } from './camera-control-strip/camera-control-strip.component';
import { CameraVideoComponent } from "./camera-video/camera-video.component";


@NgModule({
  declarations: [
    CameraVideoComponent,
    CameraControlStripComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CameraVideoComponent,
  ]
})
export class CameraModule { }
