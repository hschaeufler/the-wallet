import {Component, OnInit} from '@angular/core';
import {CameraService} from "../services/camera.service";

@Component({
  selector: 'the-wallet-camera-control-strip',
  template: `
    <mat-toolbar class="the-wallet-camera-control-strip">
      <mat-toolbar-row class="the-wallet-camera-control-strip-row">
      <button mat-mini-fab aria-label="Light!" color="primary">
        <mat-icon>flashlight_on</mat-icon>
      </button>
      <button (click)="takePhoto()" mat-fab aria-label="Photo!" color="primary">
        <mat-icon>photo_camera</mat-icon>
      </button>
      <button (click)="switchCamera()" mat-mini-fab aria-label="Switch Camera!" color="primary">
        <mat-icon>switch_camera</mat-icon>
      </button>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styleUrls: ['./camera-control-strip.component.scss']
})
export class CameraControlStripComponent implements OnInit {

  constructor(private cameraService: CameraService) {
  }

  switchCamera(){
    this.cameraService.switchCamera();
  }

  takePhoto(){
    this.cameraService.takePicture();
  }

  ngOnInit(): void {
  }

}
