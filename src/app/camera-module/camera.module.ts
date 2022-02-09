import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CameraControlStripComponent} from './camera-control-strip/camera-control-strip.component';
import {CameraVideoComponent} from "./camera-video/camera-video.component";
import {CameraDialogComponent} from './camera-dialog/camera-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FeatureDetectionService} from "./services/feature-detection.service";
import {featureDetectionServiceFactory} from "./services/feature-detection.service.factory";
import {qrcodeReaderServiceProvider} from "./services/qrcode-reader.service.provider";


@NgModule({
  declarations: [
    CameraVideoComponent,
    CameraControlStripComponent,
    CameraDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: featureDetectionServiceFactory,
      deps: [FeatureDetectionService],
      multi: true
    },
    qrcodeReaderServiceProvider
  ],
  exports: [
    CameraDialogComponent,
  ]
})
export class CameraModule {
}
