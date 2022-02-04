import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  static readonly MEDIA_DEVICE_KIND_VIDEOINPUT = "videoinput";

  private videoStreamSource = new Subject<MediaStream>();
  private pictureSource = new Subject<Blob>();

  mediaStream$: Observable<MediaStream> = this.videoStreamSource.asObservable();
  picture$: Observable<Blob> = this.pictureSource.asObservable();

  private mediaStream?: MediaStream;

  private DEFAULT_CONSTRAINTS: MediaStreamConstraints = {
    video: true,
    audio: false,
  };


  constructor() {
  }


  isCameraUsable(): boolean {
    return 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices;
  }

  supportsEnumerateDevices() {
    return 'mediaDevices' in navigator && 'enumerateDevices' in navigator.mediaDevices;
  }

  switchCamera() {
    this.getAvailableVideoDevices().then((mediaDeviceInfos: MediaDeviceInfo[]) => {
      if (mediaDeviceInfos.length > 0) {
        this.start({video: {deviceId: mediaDeviceInfos[0].deviceId}});
      }
    })
  }

  private async getAvailableVideoDevices(): Promise<MediaDeviceInfo[]> {
    if (!this.isCameraUsable() && !this.supportsEnumerateDevices()) {
      throw new DOMException("Feature Enumarate Devices is not supported!");
    }
    const currentDeviceId = this.mediaStream?.active ? this.mediaStream.getTracks()[0].id : null;
    const mediaDevices: MediaDeviceInfo[] = await navigator.mediaDevices.enumerateDevices();
    const otherVideoDevices = mediaDevices.filter(
      mediaDeviceInfo => mediaDeviceInfo.kind === CameraService.MEDIA_DEVICE_KIND_VIDEOINPUT
        && mediaDeviceInfo.deviceId !== currentDeviceId
    );
    return otherVideoDevices;
  }

  stop() {
    if (this.mediaStream?.active) {
      const tracks = this.mediaStream.getTracks();
      tracks.forEach((track) => {
        track.stop();
      })
    }
  }

  private detectNativeImageCaptureApi() {
    return 'ImageCapture' in window;
  }

  private async takeNativePicture(photoSettings?: PhotoSettings): Promise<Blob> {
    if (!this.detectNativeImageCaptureApi()) {
      throw "Please use ths function only when ImageCapture-Api is supported!";
    }
    if (this.mediaStream?.active) {
      const mediaStreamTracks = this.mediaStream.getTracks();
      const imageCapture = new ImageCapture(mediaStreamTracks[0]);
      const photo = await imageCapture.takePhoto(photoSettings);
      return photo;
    } else {
      throw new DOMException("Stream is not active anymore!");
    }
  }

  private detectCanvasImageApi() {
    return !!document.createElement('canvas').getContext
      && !!document.createElement('canvas').toBlob;
  }

  isTakingPicturesUsable() {
    return this.detectCanvasImageApi() || this.detectNativeImageCaptureApi();
  }

  private async takeCanvasPicture(): Promise<Blob> {
    const photoPromise = new Promise<Blob>((resolve, reject) => {
      if (this.mediaStream?.active) {
        const video = document.createElement("video");
        const canvas = document.createElement("canvas");
        video.autoplay = true;
        video.srcObject = this.mediaStream;
        video.addEventListener("canplay", (event) => {
          const height = video.videoHeight;
          const width = video.videoWidth;
          const context = canvas.getContext("2d");
          if (!context) {
            throw new DOMException("No 2d-Context from Canvas replied!");
          }
          context.drawImage(video, 0, 0, width, height);
          canvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
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
