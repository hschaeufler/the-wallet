import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TheWalletRoutingModule } from './the-wallet-routing.module';
import { TheWalletComponent } from './the-wallet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CameraModule } from './modules/camera-module/camera.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HealthCertificateModule } from './modules/health-certificate/health-certificate.module';
import { DEFAULT_CONFIG, Driver, NgForageOptions } from 'ngforage';
// @ts-ignore
import memoryStorageDriver from 'localforage-memoryStorageDriver/dist/localforage-memoryStorageDriver.es6';
import { DocumentPageComponent } from './components/pages/document-page/document-page.component';
import { RouteNotFoundPageComponent } from './components/pages/route-not-found-page/route-not-found-page.component';
import { PageTemplateComponent } from './components/templates/page-template/page-template.component';
import { WalletPageComponent } from './components/pages/wallet-page/wallet-page.component';
import { DocumentListComponent } from './components/organisms/document-list/document-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DocumentListElementComponent } from './components/organisms/document-list-element/document-list-element.component';
import { SortDocumentsByArrayPipe } from './pipes/sort-by-array.pipe';
import { UiComponentsModule } from './modules/ui-components/ui-components.module';
import { PageTemplateHeaderDirective } from './components/templates/page-template/page-template-header.directive';
import { AppBarComponent } from './components/molecules/app-bar/app-bar.component';
import { AppBarStartElementsDirective } from './components/molecules/app-bar/app-bar-start-elements.directive';
import { AppBarEndElementsDirective } from './components/molecules/app-bar/app-bar-end-elements.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FileSystemModule } from './modules/file-system/file-system.module';
import { DocumentComponent } from './components/organisms/document/document.component';
import { DocumentShareButtonComponent } from './components/organisms/document-share-button/document-share-button.component';
import { DocumentDownloadButtonComponent } from './components/organisms/document-download-button/document-download-button.component';
import { QRCodeGeneratorModule } from './modules/qrcode-generator/qrcode-generator.module';
import { CommonsModule } from './modules/commons/commons.module';
import { PkpassModule } from './modules/pkpass/pkpass.module';
import { DragDropSliderComponent } from './components/molecules/drag-drop-slider/drag-drop-slider.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TheWalletComponent,
    DocumentPageComponent,
    WalletPageComponent,
    RouteNotFoundPageComponent,
    PageTemplateComponent,
    DocumentListComponent,
    DocumentListElementComponent,
    SortDocumentsByArrayPipe,
    PageTemplateHeaderDirective,
    AppBarComponent,
    AppBarStartElementsDirective,
    AppBarEndElementsDirective,
    DocumentComponent,
    DocumentShareButtonComponent,
    DocumentDownloadButtonComponent,
    DragDropSliderComponent,
  ],
  imports: [
    BrowserModule,
    TheWalletRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately',
    }),
    MatToolbarModule,
    CameraModule,
    MatIconModule,
    MatButtonModule,
    HealthCertificateModule,
    DragDropModule,
    UiComponentsModule,
    MatProgressSpinnerModule,
    FileSystemModule,
    QRCodeGeneratorModule,
    CommonsModule,
    PkpassModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      // Initilaize Local Forage Driver
      provide: DEFAULT_CONFIG,
      useValue: {
        name: 'theWalletCertificateStore',
        //Use default Indexdb -> WebSQL -> LocalStorage -> MemoryStorage
        driver: [
          Driver.INDEXED_DB,
          Driver.WEB_SQL,
          Driver.LOCAL_STORAGE,
          memoryStorageDriver,
        ],
      } as NgForageOptions,
    },
  ],
  exports: [DocumentComponent],
  bootstrap: [TheWalletComponent],
})
export class TheWalletModule {}
