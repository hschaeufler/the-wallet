import {Component, OnInit} from '@angular/core';
import {CovidCertificateService} from "./modules/health-certificate/services/covid-certificate.service";
import {CameraService} from "./modules/camera-module/services/camera.service";
import {Observable} from "rxjs";
import {QRCodeModel} from "./modules/camera-module/services/QRCode.model";


@Component({
  selector: 'the-wallet-root',
  templateUrl: './the-wallet.component.html',
  styleUrls: ['./the-wallet.component.scss']
})
export class TheWalletComponent {
  title = 'the wallet';
  value = "";
}
