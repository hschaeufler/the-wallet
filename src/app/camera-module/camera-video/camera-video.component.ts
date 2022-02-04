import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {CameraService} from "../services/camera.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'the-wallet-camera-video',
  template: `
    <div class="the-wallet-camera-video ">
    <video autoplay [srcObject]="mediaStream"></video>
    </div>
  `,
  styleUrls: ['./camera-video.component.scss']
})
export class CameraVideoComponent implements AfterViewInit, OnInit, OnDestroy {

  mediaStream: MediaStream | undefined;
  private subscription?: Subscription;


  constructor(
    private cameraService: CameraService,
  ) {
  }

  ngOnDestroy(): void {
        this.subscription?.unsubscribe();
        this.cameraService.stop();
    }

  ngOnInit(): void {
    if (this.cameraService.isCameraUsable()) {
      this.subscription = this.cameraService.mediaStream$.subscribe({
        next: (mediaStream) => {
          this.mediaStream = mediaStream;
        },
        error: error => console.log(error)
      });
    }

  }

  ngAfterViewInit(): void {
    this.cameraService.start();
  }


}
