import { Component, OnInit } from '@angular/core';
import {from, map, Observable} from "rxjs";
import {CameraService} from "../../../camera-module/services/camera.service";
import {CovidCertificateService} from "../../../health-certificate/services/covid-certificate.service";
import {QRCodeModel} from "../../../camera-module/services/QRCode.model";


@Component({
  selector: 'the-wallet-certificate-page',
  template: `
    <the-wallet-page-template>
      <the-wallet-health-certificate *ngIf="qrCode"
                                     [value]="qrCode"></the-wallet-health-certificate>
    </the-wallet-page-template>
    <button (click)="openDialog()" mat-fab color="primary" aria-label="QR_Code">
      <mat-icon>qr_code</mat-icon>
    </button>
  `,
  styleUrls: ['./document-page.component.scss']
})
export class DocumentPageComponent implements OnInit {
  qrCode$?: Observable<QRCodeModel>;
  qrCode?: string;

  constructor(
    private covidCertificateService: CovidCertificateService,
    private cameraService: CameraService,
  ) {
  }



  ngOnInit(): void {
    //this.qrCode$ = from("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").pipe(map(val => ({value: val} as QRCodeModel)));
    this.qrCode = "HC1:NCFOXN%TS3DH+ZS9MI+SMA8M$CN5NL-AH-XIIOOW%IHOT$E08WAWN0%W0AT4V22F/8X*G3M9FQH+4J/-K$+CY73JC3MD3IFTNAJSZ4EJ0NTI4L6YO1%UG/YL WO*Z7ON1 *L:O80R5LY5K%JLY5W0S./RPZ5JT9A/RF H ZP4UBKS5%%H/P5VV3%-IHRIWQHYZKOP6OH6XO9IE5IVU5P2-GA*PE1H6IO2OO9$G40GHUZ4+FJE 4Y3LL/II 0SC9+W80OD1YHI$HIMIASQYQ7V34Q3QR$P2OIC0JVLA8J3ET3:H3A+2+33U SAAUOT3TPTO4UBZIC0JKQT.Q6Q+M3+L IMXDRHJUXYOOP6NQQ0THYZQ4H99$R2-JIS77%F.UINXU: RFTIDG62QEZUIQJAZGA+1VG%U5SI:TU+MM0W5CZ5+7VZX8F7D*OLRJVJ/94CD/*SNRHG6G.HE.JA37APM3Y7CB9SXW69B1U5SX:5/CTLNRZITVIRE FP2UCWJK0AH8K*/N1SPGV9F55W A/KNL7ET20RB643";
  }

  openDialog() {
    this.cameraService.openCameraDialog().afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
