import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PkpassPreviewComponent } from './components/pages/pkpass-preview/pkpass-preview.component';
import { PkpassComponent } from './components/pages/pkpass/pkpass.component';
import { MatCardModule } from '@angular/material/card';
import { DocumentModuleApiModule } from '../document-module-api/document-module-api.module';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { PkpassPreviewActionsDirective } from './directives/pkpass-preview-actions.directive';
import { PkpassCardHeaderComponent } from './components/organisms/pkpass-card-header/pkpass-card-header.component';
import { MatIconModule } from '@angular/material/icon';
import { PkpassHeaderFieldListComponent } from './components/molecules/pkpass-header-field-list/pkpass-header-field-list.component';
import { MatListModule } from '@angular/material/list';
import { HealthCertificateModule } from '../health-certificate/health-certificate.module';
import { PkpassBarcodeComponent } from './components/molecules/pkpass-barcode/pkpass-barcode.component';
import { QRCodeGeneratorModule } from '../qrcode-generator/qrcode-generator.module';
import { TransformPKPassBarcodeFormatPipe } from './pipes/transform-pkpass-barcode-format.pipe';
import { PkpassCardComponent } from './components/organisms/pkpass-card/pkpass-card.component';
import { PkpassFieldListComponent } from './components/molecules/pkpass-field-list/pkpass-field-list.component';
import { CommonsModule } from '../commons/commons.module';
import { PkpassTransitTypeIconPipe } from './pipes/pkpass-transit-type-icon.pipe';
import { TransitTypeIconComponent } from './components/atoms/transit-type-icon/transit-type-icon.component';
import { BoardingPassPrimaryFieldListComponent } from './components/molecules/boarding-pass-primary-field-list/boarding-pass-primary-field-list.component';
import { PassStructureToTransitTypePipe } from './pipes/pass-structure-to-transit-type.pipe';
import { PkpassPrimaryFieldsComponent } from './components/molecules/pkpass-primary-fields/pkpass-primary-fields.component';
import { BoardingPassPrimaryFieldComponent } from './components/atoms/boarding-pass-primary-field/boarding-pass-primary-field.component';
import { PkpassDownloadButtonComponent } from './components/pages/pkpass-download-button/pkpass-download-button.component';
import { PkpassShareButtonComponent } from './components/pages/pkpass-share-button/pkpass-share-button.component';
import { WebShareModule } from '../web-share/web-share.module';

@NgModule({
  declarations: [
    PkpassPreviewComponent,
    PkpassComponent,
    PkpassPreviewActionsDirective,
    PkpassCardHeaderComponent,
    PkpassHeaderFieldListComponent,
    PkpassBarcodeComponent,
    TransformPKPassBarcodeFormatPipe,
    PkpassCardComponent,
    PkpassFieldListComponent,
    PkpassTransitTypeIconPipe,
    TransitTypeIconComponent,
    BoardingPassPrimaryFieldListComponent,
    PassStructureToTransitTypePipe,
    PkpassPrimaryFieldsComponent,
    BoardingPassPrimaryFieldComponent,
    PkpassDownloadButtonComponent,
    PkpassShareButtonComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    DocumentModuleApiModule,
    UiComponentsModule,
    MatIconModule,
    MatListModule,
    HealthCertificateModule,
    QRCodeGeneratorModule,
    CommonsModule,
    DocumentModuleApiModule,
    WebShareModule,
  ],
  exports: [
    PkpassPreviewComponent,
    PkpassComponent,
    PkpassDownloadButtonComponent,
    PkpassShareButtonComponent,
    PkpassPreviewActionsDirective,
  ],
})
export class PkpassModule {}
