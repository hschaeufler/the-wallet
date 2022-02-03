import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() {
  }

  private videoStreamSource = new Subject<MediaStream>();
  private pictureSource = new Subject<Blob>();

  mediaStream$: Observable<MediaStream> = this.videoStreamSource.asObservable();
  picture$: Observable<Blob> = this.pictureSource.asObservable();

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

  private async takeNativePicture(photoSettings?: PhotoSettings): Promise<Blob> {
    if(!this.detectNativeImageCaptureApi()){
      throw "Please use ths function only when ImageCapture-Api is supported!";
    }
    if(this.mediaStream?.active){
      const mediaStreamTracks = this.mediaStream.getTracks();
      const imageCapture = new ImageCapture(mediaStreamTracks[0]);
      const photo = await imageCapture.takePhoto(photoSettings);
      return photo;
    } else {
      throw new DOMException("Stream is not active anymore!");
    }
  }

  private detectCanvasImageApi(){
    return !!document.createElement('canvas').getContext
    && !!document.createElement('canvas').toBlob;
  }

  isTakingPicturesUsable() {
    return this.detectCanvasImageApi() || this.detectNativeImageCaptureApi();
  }

  private async takeCanvasPicture(): Promise<Blob> {
    const photoPromise = new Promise<Blob>((resolve, reject) =>{
      if(this.mediaStream?.active) {
        const video = document.createElement("video");
        const canvas = document.createElement("canvas");
        video.autoplay = true;
        video.srcObject = this.mediaStream;
        video.addEventListener("canplay", (event)=>{
          const height = video.videoHeight;
          const width = video.videoWidth;
          const context = canvas.getContext("2d");
          if(!context) {
            throw new DOMException("No 2d-Context from Canvas replied!");
          }
          context.drawImage(video, 0, 0, width, height);
          canvas.toBlob((blob)=>{
            if(blob){
              resolve(blob);
            } else{
              reject(new DOMException("Could not generate Blob!"));
            }
          });
        })
      } else {
        throw new DOMException("VideoStream not active!");
      }
    });
    return photoPromise;
  }

  takePicture(photoSettings?: PhotoSettings) {
    const photoPromise = this.detectNativeImageCaptureApi()
      ? this.takeNativePicture(photoSettings)
      : this.takeCanvasPicture();
    photoPromise.then((blob) => {
      this.pictureSource.next(blob);
    }).catch((reason: DOMException) => {
      this.pictureSource.error(reason)
    });
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
