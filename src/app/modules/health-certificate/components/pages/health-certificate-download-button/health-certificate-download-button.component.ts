import { Component, EventEmitter, Output } from '@angular/core';
import { HealthCertificateAbstractButtonComponent } from '../../organisms/health-certificate-abstract-button/health-certificate-abstract-button.component';
import { QRCodeGeneratorService } from '../../../../qrcode-generator/services/qrcode-generator.service';
import { AbstractDocumentDownloadButtonComponent } from '../../../../document-module-api/components/pages/abstract-document-download-button/abstract-document-download-button.component';
import { CertificateWrapperModel } from '../../../CertificateWrapper.model';

@Component({
  selector: 'the-wallet-health-certificate-download-button',
  template: `
    <the-wallet-download-button
      *ngIf="qrCodeFile$ | async as qrCodeFile"
      (click)="download.emit([qrCodeFile, FILE_NAME])"
    ></the-wallet-download-button>
  `,
  styleUrls: ['./health-certificate-download-button.component.scss'],
})
export class HealthCertificateDownloadButtonComponent
  extends HealthCertificateAbstractButtonComponent
  implements AbstractDocumentDownloadButtonComponent<CertificateWrapperModel>
{
  readonly FILE_NAME = 'Health_Certificate.png';

  @Output()
  download = new EventEmitter<[File, string?]>();

  constructor(_qrCodeService: QRCodeGeneratorService) {
    super(_qrCodeService);
  }
}
