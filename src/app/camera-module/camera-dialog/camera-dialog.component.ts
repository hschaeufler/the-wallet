import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-wallet-camera',
  template: `
    <mat-toolbar>
      <mat-toolbar-row class="the-wallet-camera-dialog-title-row">
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
    <mat-dialog-actions>
      <the-wallet-camera-control-strip></the-wallet-camera-control-strip>
    </mat-dialog-actions>
  `,
  styleUrls: ['./camera-dialog.component.scss']
})
export class CameraDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
