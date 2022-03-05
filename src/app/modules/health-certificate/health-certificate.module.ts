import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HealthCertificateComponent} from "./components/pages/health-certificate/health-certificate.component";
import {MatCardModule} from "@angular/material/card";
import { QRCodeComponent } from './components/organisms/qrcode/qrcode.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import { VaccinationDetailComponent } from './components/molecules/vaccination-detail/vaccination-detail.component';
import { TestDetailComponent } from './components/molecules/test-detail/test-detail.component';
import { RecoveryDetailComponent } from './components/molecules/recovery-detail/recovery-detail.component';
import { PersonDetailComponent } from './components/molecules/person-detail/person-detail.component';
import { CertificateTypeNamePipe } from './pipes/certificate-type-name.pipe';
import {HeatlhCertificateCardComponent} from "./components/organisms/health-certificate-card/heatlh-certificate-card.component";
import {TestTypePipe} from "./pipes/test-type.pipe";
import {TargetDiseasePipe} from "./pipes/target-disease.pipe";
import {VaccineTypePipe} from "./pipes/vaccine-type.pipe";
import {VaccinePipe} from "./pipes/vaccine.pipe";
import {VaccineManufacturerPipe} from "./pipes/VaccineManufacturer.pipe";
import {ToLocaleDatePipe} from "./pipes/to-locale-date.pipe";
import {ToCountryNamePipe} from "./pipes/to-country-name.pipe";
import {TestManufacturerPipe} from "./pipes/test-manufacturer.pipe";
import {ToTestResultPipe} from "./pipes/to-test-result.pipe";
import {ToDisplayNamePipe} from "./pipes/to-display-name.pipe";
import { CertificateTypePipe } from './pipes/certificate-type.pipe';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatChipsModule} from "@angular/material/chips";
import { CertificateCardChipListComponent } from './components/molecules/certificate-card-chip-list/certificate-card-chip-list.component';
import { HealthCertificatePreviewComponent } from './components/pages/health-certificate-preview/health-certificate-preview.component';
import {MatIconModule} from "@angular/material/icon";
import { ToCertificateTypeIconPipe } from './pipes/to-certificate-type-icon.pipe';
import {DefaultExpansionPanelComponent} from "./components/molecules/default-expansion-panel/default-expansion-panel.component";
import { CertificateCardHeaderComponent } from './components/molecules/certificate-card-header/certificate-card-header.component';
import {UiComponentsModule} from "../ui-components/ui-components.module";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import { HealthCertificatePreviewActionsDirective } from './components/pages/health-certificate-preview/health-certificate-preview-actions.directive';




@NgModule({
  declarations: [
    HealthCertificateComponent,
    QRCodeComponent,
    HeatlhCertificateCardComponent,
    VaccinationDetailComponent,
    TestDetailComponent,
    RecoveryDetailComponent,
    TargetDiseasePipe,
    VaccineTypePipe,
    VaccinePipe,
    VaccineManufacturerPipe,
    ToLocaleDatePipe,
    ToCountryNamePipe,
    TestTypePipe,
    TestTypePipe,
    TestManufacturerPipe,
    ToTestResultPipe,
    PersonDetailComponent,
    ToDisplayNamePipe,
    CertificateTypeNamePipe,
    CertificateTypePipe,
    DefaultExpansionPanelComponent,
    CertificateCardChipListComponent,
    HealthCertificatePreviewComponent,
    ToCertificateTypeIconPipe,
    CertificateCardHeaderComponent,
    HealthCertificatePreviewActionsDirective,
  ],
    exports: [
        HealthCertificateComponent,
        HealthCertificatePreviewComponent,
        HealthCertificatePreviewActionsDirective
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatExpansionModule,
    MatChipsModule,
    MatIconModule,
    UiComponentsModule,
    RouterModule,
    MatButtonModule,
  ]
})
export class HealthCertificateModule { }
