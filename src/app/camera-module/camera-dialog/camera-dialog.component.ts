import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-wallet-camera',
  template: `
    <mat-dialog->Camera!</mat-dialog->
    <mat-dialog-content>
      <the-wallet-camera-video></the-wallet-camera-video>
    </mat-dialog-content>
    <the-wallet-camera-control-strip></the-wallet-camera-control-strip>
  `,
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
