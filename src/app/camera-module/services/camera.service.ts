import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {QrcodeReaderService} from "./qrcode-reader.service";
import {QRCodeModel} from "./QRCode.model";

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  static readonly MEDIA_DEVICE_KIND_VIDEOINPUT = "videoinput";

  private videoStreamSource = new Subject<MediaStream>();
  private pictureSource = new Subject<Blob>();
  private qrCodeSource = new Subject<QRCodeModel>();

  mediaStream$: Observable<MediaStream> = this.videoStreamSource.asObservable();
  picture$: Observable<Blob> = this.pictureSource.asObservable();
  qrCode$: Observable<QRCodeModel> = this.qrCodeSource.asObservable();

  private mediaStream?: MediaStream;

  private DEFAULT_CONSTRAINTS: MediaStreamConstraints = {
    video: true,
    audio: false,
  };


  constructor(
    private qrcodeReaderService: QrcodeReaderService,
    ) {
    console.log(qrcodeReaderService.getImplementation());
  }


  supportsCameraApi(): boolean {
    return 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices;
  }

  supportsEnumerateDevicesApi() {
    return 'mediaDevices' in navigator && 'enumerateDevices' in navigator.mediaDevices;
  }

  supportsTakingPictures(){
    return (
      !!document.createElement('canvas').getContext
      && !!document.createElement('canvas').toBlob
    ) || 'ImageCapture' in window;
  }

  switchCamera() {
    this.getAvailableVideoDevices().then((mediaDeviceInfos: MediaDeviceInfo[]) => {
      if (mediaDeviceInfos.length > 0) {
        this.start({video: {deviceId: mediaDeviceInfos[0].deviceId}});
      }
    })
  }

  private async getAvailableVideoDevices(): Promise<MediaDeviceInfo[]> {
    if (!this.supportsCameraApi() && !this.supportsEnumerateDevicesApi()) {
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


  takePicture(photoSettings?: PhotoSettings) {
    if(this.mediaStream?.active) {
        const mediaStreamTracks = this.mediaStream.getTracks();
        const imageCapture = new ImageCapture(mediaStreamTracks[0]);
        const photoPromise = imageCapture.takePhoto(photoSettings);
      photoPromise.then((blob) => {
        this.pictureSource.next(blob);
      }).catch((reason: DOMException) => {
        this.pictureSource.error(reason)
      });
    }
  }

  start(constraints?: MediaStreamConstraints, scanForQRCodes = true) {
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
