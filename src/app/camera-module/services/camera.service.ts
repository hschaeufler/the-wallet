import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {QrcodeReaderService} from "./qrcode-reader.service";
import {QRCodeModel} from "./QRCode.model";
import {ImageCaptureUtils} from "./image-capture.utils";
import {FeatureDetectionService} from "./feature-detection.service";
import {ImageCaptureApi} from "../polyfills/image-capture-api.polyfill";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CameraDialogComponent} from "../camera-dialog/camera-dialog.component";


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

  private imageCaptureApi?: ImageCaptureApi;

  private DEFAULT_CONSTRAINTS: MediaStreamConstraints = {
    video: {
      facingMode: "environment",
    },
    audio: false,
  };


  constructor(
    private qrcodeReaderService: QrcodeReaderService,
    private featureDetectionService: FeatureDetectionService,
    private matDialog: MatDialog,
  ) {
    console.log(qrcodeReaderService.getImplementation());
  }


  supportsCameraApi(): boolean {
   return this.featureDetectionService.getUserMedia();
  }

  supportsEnumerateDevicesApi() {
    return this.featureDetectionService.enumerateDevices();
  }

  supportsTakingPictures() {
    return this.featureDetectionService.canvas()
      || this.featureDetectionService.imageCapture();
  }

  supportsFlashlight() {
    return this.featureDetectionService.getSupportedConstraints()
      && navigator.mediaDevices.getSupportedConstraints().torch;
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

  scanStreamForQrCodes() {
    window.requestAnimationFrame(async () => {
      if (this.mediaStream && this.mediaStream?.active) {
        try {
          if(!this.imageCaptureApi) {
            this.imageCaptureApi = new ImageCaptureApi(this.mediaStream.getVideoTracks()[0]);
          }
          const {canvas, context} = await this.imageCaptureApi.drawImageToCanvas();
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const qrCode = await this.qrcodeReaderService.detectImage(imageData);
          if (qrCode && qrCode.length > 0) {
            this.qrCodeSource.next(qrCode[0]);
          }
        } catch (exception) {
          console.error(exception);
        }
        this.scanStreamForQrCodes();
      }
    });
  }


  takePicture(photoSettings?: PhotoSettings) {
    if (this.mediaStream?.active) {
      ImageCaptureUtils.takePictureOfStream(this.mediaStream, photoSettings).then(
        (blob) => {
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
    mediaDevicePromise.then(
      (mediaStream: MediaStream) => {
        this.mediaStream = mediaStream;
        this.videoStreamSource.next(mediaStream);
        if (scanForQRCodes) {
          this.scanStreamForQrCodes();
        }
      }).catch((reason: DOMException) => {
      this.videoStreamSource.error(reason);
    });
  }

  openCameraDialog(): MatDialogRef<CameraDialogComponent>{
    //have a look at: https://stackoverflow.com/questions/48688614/angular-custom-style-to-mat-dialog
    //style is in style.css
    return this.matDialog.open(CameraDialogComponent, {panelClass: 'camera-dialog'});
  }
}
