import { Component, OnInit } from '@angular/core';
import {CameraService} from "../../services/camera.service";

@Component({
  selector: 'app-camera',
  template: `
    <video autoplay></video>
  `,
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor(private cameraService: CameraService) { }

  ngOnInit(): void {
    if(this.cameraService.isUsable()) {

    }
  }

}
