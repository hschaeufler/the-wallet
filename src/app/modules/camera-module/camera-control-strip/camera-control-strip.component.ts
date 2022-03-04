import {Component, Input, OnInit} from '@angular/core';
import {CameraService} from "../services/camera.service";
import {CameraTypeEnum} from "../services/CameraTypeEnum";

@Component({
  selector: 'the-wallet-camera-control-strip',
  template: `
    <mat-toolbar class="the-wallet-camera-control-strip">
      <mat-toolbar-row class="the-wallet-camera-control-strip-row">
      <button [disabled]="!supportsFlash" mat-mini-fab aria-label="Light!" color="primary">
        <mat-icon>flashlight_on</mat-icon>
      </button>
      <button [disabled]="cameraType !== cameraTypeEnum.DEFAULT" (click)="takePhoto()" mat-fab aria-label="Photo!" color="primary">
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

  @Input()
  cameraType? = CameraTypeEnum.DEFAULT;

  cameraTypeEnum = CameraTypeEnum;

  supportsFlash = false;

  constructor(private cameraService: CameraService) {
  }

  ngOnInit(): void {
    this.supportsFlash = this.cameraService.supportsFlashlight();
  }

  switchCamera(){
    this.cameraService.switchCamera();
  }

  takePhoto(){
    this.cameraService.takePicture();
  }

}
