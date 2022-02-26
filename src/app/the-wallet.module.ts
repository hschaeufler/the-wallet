import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TheWalletRoutingModule} from './the-wallet-routing.module';
import {TheWalletComponent} from './the-wallet.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {MatToolbarModule} from "@angular/material/toolbar";
import {CameraModule} from "./camera-module/camera.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HealthCertificateModule} from "./health-certificate/health-certificate.module";
import {DEFAULT_CONFIG, Driver, NgForageOptions} from "ngforage";
// @ts-ignore
import memoryStorageDriver from "localforage-memoryStorageDriver/dist/localforage-memoryStorageDriver.es6";
import {CertificatePageComponent} from "./components/pages/certificate-page/certificate-page.component";
import {RouteNotFoundPageComponent} from "./components/pages/route-not-found-page/route-not-found-page.component";
import {PageTemplateComponent} from "./components/templates/page-template/page-template.component";
import {WalletPageComponent} from "./components/pages/wallet-page/wallet-page.component";


@NgModule({
  declarations: [
    TheWalletComponent,
    CertificatePageComponent,
    WalletPageComponent,
    RouteNotFoundPageComponent,
    PageTemplateComponent,
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
  providers: [
    { // Initilaize Local Forage Driver
      provide: DEFAULT_CONFIG,
      useValue: {
        name: 'theWalletCertificateStore',
        //Use default Indexdb -> WebSQL -> LocalStorage -> MemoryStorage
        driver: [
          Driver.INDEXED_DB,
          Driver.WEB_SQL,
          Driver.LOCAL_STORAGE,
          memoryStorageDriver
        ]
      } as NgForageOptions
    }
  ],
  bootstrap: [TheWalletComponent]
})
export class TheWalletModule { }
