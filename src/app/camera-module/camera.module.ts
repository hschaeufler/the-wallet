import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from "./camera/camera.component";
import { CameraControlStripComponent } from './camera-control-strip/camera-control-strip.component';


@NgModule({
  declarations: [
    CameraComponent,
    CameraControlStripComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CameraComponent,
  ]
})
export class CameraModule { }
