import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TheWalletRoutingModule } from './the-wallet-routing.module';
import { TheWalletComponent } from './the-wallet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatToolbarModule} from "@angular/material/toolbar";
import {CameraModule} from "./camera-module/camera.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HealthCertificateModule} from "./health-certificate/health-certificate.module";

@NgModule({
  declarations: [
    TheWalletComponent,
  ],
  imports: [
    BrowserModule,
    TheWalletRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MatToolbarModule,
    CameraModule,
    MatIconModule,
    MatButtonModule,
    HealthCertificateModule
  ],
  providers: [],
  bootstrap: [TheWalletComponent]
})
export class TheWalletModule { }
