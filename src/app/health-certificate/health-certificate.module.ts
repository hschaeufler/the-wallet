import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HealthCertificateComponent} from "./health-certificate/health-certificate.component";
import {MatCardModule} from "@angular/material/card";
import { QRCodeComponent } from './qrcode/qrcode.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    HealthCertificateComponent,
    QRCodeComponent,
  ],
  exports: [
    HealthCertificateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
  ]
})
export class HealthCertificateModule { }
