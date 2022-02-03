import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-wallet-camera',
  template: `
    <the-wallet-camera-video></the-wallet-camera-video>
    <the-wallet-camera-control-strip></the-wallet-camera-control-strip>
  `,
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
