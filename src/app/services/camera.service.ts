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

  private detectNativeImageCaptureApi(){
    return 'ImageCapture' in window;
  }

  private takeNativePicture(PhotoSettings){
    if(this.mediaStream?.active && this.detectNativeImageCaptureApi()){
      const imageCaputure = new ImageCapture(this.mediaStream);
      const photo = imageCaputure.takePhoto()

    }
  }

  takePicture() {
    if(this.mediaStream?.active){

      video.autoplay = true;
      video.srcObject = this.mediaStream;

      const video = document.createElement("video");
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.drawImage(video);
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
