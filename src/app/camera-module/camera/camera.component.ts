import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {CameraService} from "../services/camera.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-camera',
  template: `
    <video autoplay [srcObject]="mediaStream"></video>
  `,
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements AfterViewInit, OnInit, OnDestroy {

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
    if (this.cameraService.isUsable()) {
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
