import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HealthCertificateComponent} from "./health-certificate/health-certificate.component";
import {MatCardModule} from "@angular/material/card";
import { QRCodeComponent } from './qrcode/qrcode.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import { VaccinationDetailComponent } from './vaccination-detail/vaccination-detail.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { RecoveryDetailComponent } from './recovery-detail/recovery-detail.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { CertificateTypeNamePipe } from './pipes/certificate-type-name.pipe';
import {HeatlhCertificateCardComponent} from "./health-certificate-card/heatlh-certificate-card.component";
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
import { DefaultExpansionPanelComponent } from './default-expansion-panel/default-expansion-panel.component';
import {MatChipsModule} from "@angular/material/chips";
import { CertificateCardChipListComponent } from './certificate-card-chip-list/certificate-card-chip-list.component';




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
  ],
  exports: [
    HealthCertificateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatExpansionModule,
    MatChipsModule,
  ]
})
export class HealthCertificateModule { }
