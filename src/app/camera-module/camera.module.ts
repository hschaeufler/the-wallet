import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CameraControlStripComponent} from './camera-control-strip/camera-control-strip.component';
import {CameraVideoComponent} from "./camera-video/camera-video.component";
import {CameraDialogComponent} from './camera-dialog/camera-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FeatureDetectionStartupService} from "./services/feature-detection-startup.service";
import {featureDetectionStartupServiceFactory} from "./services/feature-detection-startup.service.factory";
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
      useFactory: featureDetectionStartupServiceFactory,
      deps: [FeatureDetectionStartupService],
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
