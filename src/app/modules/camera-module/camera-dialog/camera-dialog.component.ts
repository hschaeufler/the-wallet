import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CameraDialogOptionsModel} from "../services/CameraDialogOptions.model";
import {CameraTypeEnum} from "../services/CameraTypeEnum";

@Component({
  selector: 'the-wallet-camera-dialog',
  template: `
    <mat-toolbar class="camera-dialog-component-title" color="primary">
      <mat-toolbar-row class="camera-dialog-component-title-row">
        <h1 mat-dialog-title>Camera</h1>
        <button class="close-button" mat-dialog-close>
          <mat-icon>close</mat-icon>
        </button>
      </mat-toolbar-row>
    </mat-toolbar>
    <mat-dialog-content>
      <the-wallet-camera-video [scanForQRCode]="data.cameraType === cameraTypeEnum.QRCODE">
      </the-wallet-camera-video>
    </mat-dialog-content>
    <the-wallet-camera-control-strip [cameraType]="data.cameraType"></the-wallet-camera-control-strip>
  `,
  styleUrls: ['./camera-dialog.component.scss'],
})
export class CameraDialogComponent {

  cameraTypeEnum = CameraTypeEnum;

  constructor(@Inject(MAT_DIALOG_DATA) public data: CameraDialogOptionsModel) {
    console.log(data);
  }


}
