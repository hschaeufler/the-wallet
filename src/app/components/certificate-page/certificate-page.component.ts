import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {QRCodeModel} from "../../camera-module/services/QRCode.model";
import {CovidCertificateService} from "../../health-certificate/services/covid-certificate.service";
import {CameraService} from "../../camera-module/services/camera.service";

@Component({
  selector: 'the-wallet-certificate-page',
  template: `
    <div class="container">
      <main class="main">
        <the-wallet-health-certificate *ngIf="(qrCode$ | async)" [value]="(qrCode$ | async)!.value"></the-wallet-health-certificate>
      </main>
    </div>
    <button (click)="openDialog()" mat-fab color="primary" aria-label="QR_Code">
      <mat-icon>qr_code</mat-icon>
    </button>
  `,
  styleUrls: ['./certificate-page.component.scss']
})
export class CertificatePageComponent implements OnInit {
  qrCode$?: Observable<QRCodeModel>;

  constructor(
    private covidCertificateService: CovidCertificateService,
    private cameraService: CameraService,
  ) {
  }



  ngOnInit(): void {
    this.qrCode$ = this.cameraService.qrCode$
  }

  openDialog() {
    this.cameraService.openCameraDialog().afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
