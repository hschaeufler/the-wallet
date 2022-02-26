import {Component, OnInit} from '@angular/core';
import {CovidCertificateService} from "./health-certificate/services/covid-certificate.service";
import {CameraService} from "./camera-module/services/camera.service";
import {Observable} from "rxjs";
import {QRCodeModel} from "./camera-module/services/QRCode.model";


@Component({
  selector: 'the-wallet-root',
  templateUrl: './the-wallet.component.html',
  styleUrls: ['./the-wallet.component.scss']
})
export class TheWalletComponent {
  title = 'the wallet';
  value = "";
}
