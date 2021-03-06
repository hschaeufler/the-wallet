import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CameraService } from '../services/camera.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'the-wallet-camera-video',
  template: `
    <div class="video-component">
      <video playsinline autoplay [srcObject]="mediaStream"></video>
    </div>
  `,
  styleUrls: ['./camera-video.component.scss'],
})
export class CameraVideoComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input()
  scanForQRCode? = false;

  //not allowed private, so Template can read value
  mediaStream?: MediaStream;
  private mediaStreamSubscription?: Subscription;

  constructor(private cameraService: CameraService) {}

  ngOnDestroy(): void {
    this.mediaStreamSubscription?.unsubscribe();
    this.cameraService.stop();
  }

  ngOnInit(): void {
    if (this.cameraService.supportsCameraApi()) {
      this.mediaStreamSubscription = this.cameraService.mediaStream$.subscribe({
        next: (mediaStream) => {
          this.mediaStream = mediaStream;
        },
        error: (error) => console.log(error),
      });
    }
  }

  //Start streaming after Video-Element is ready
  ngAfterViewInit(): void {
    this.cameraService.start(undefined, this.scanForQRCode);
  }
}
