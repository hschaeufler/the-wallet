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

@NgModule({
  declarations: [
    PkpassPreviewComponent,
    PkpassComponent,
    PkpassPreviewActionsDirective,
    PkpassCardHeaderComponent,
    PkpassHeaderFieldListComponent,
    PkpassBarcodeComponent,
    TransformPKPassBarcodeFormatPipe,
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
  ],
  exports: [PkpassPreviewComponent],
})
export class PkpassModule {}
