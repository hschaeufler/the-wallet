import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'the-wallet-camera-dialog',
  template: `
      <mat-toolbar class="camera-dialog-component-title" color="primary">
        <mat-toolbar-row class="camera-dialog-component-title-row">
          <h1 mat-dialog-title>Camera!</h1>
          <button class="close-button" mat-dialog-close>
            <mat-icon>close</mat-icon>
          </button>
        </mat-toolbar-row>
      </mat-toolbar>
      <mat-dialog-content>
        <the-wallet-camera-video>
        </the-wallet-camera-video>
      </mat-dialog-content>
      <the-wallet-camera-control-strip></the-wallet-camera-control-strip>
  `,
  styleUrls: ['./camera-dialog.component.scss'],
})
export class CameraDialogComponent {

  constructor() { }


}
