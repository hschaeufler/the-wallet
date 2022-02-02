import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() {
  }

  private videoStreamSource = new Subject<MediaStream>();

  mediaStream$: Observable<MediaStream> = this.videoStreamSource.asObservable();

  private mediaStream?: MediaStream;

  private DEFAULT_CONSTRAINTS: MediaStreamConstraints = {
    video: true,
    audio: false,
  };


  isUsable(): boolean {
    return 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices;
  }

  stop() {
    if (this.mediaStream?.active) {
      const tracks = this.mediaStream.getTracks();
      tracks.forEach((track) => {
        track.stop();
      })
    }
  }


  start(constraints?: MediaStreamConstraints) {
    const mediaDevicePromise = navigator.mediaDevices.getUserMedia(
      constraints ? constraints : this.DEFAULT_CONSTRAINTS
    );
    mediaDevicePromise.then((mediaStream: MediaStream) => {
      this.mediaStream = mediaStream;
      this.videoStreamSource.next(mediaStream);
    }).catch((reason: DOMException) => {
      this.videoStreamSource.error(reason);
    });
  }
}
