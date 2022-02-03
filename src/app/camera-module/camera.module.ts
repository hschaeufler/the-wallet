import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraControlStripComponent } from './camera-control-strip/camera-control-strip.component';
import { CameraVideoComponent } from "./camera-video/camera-video.component";
import { CameraComponent } from './camera/camera.component';


@NgModule({
  declarations: [
    CameraVideoComponent,
    CameraControlStripComponent,
    CameraComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CameraComponent,
  ]
})
export class CameraModule { }
