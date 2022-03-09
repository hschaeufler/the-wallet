import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QRCodeGeneratorService } from '../../../../qrcode-generator/services/qrcode-generator.service';
import { HealthCertificateAbstractButtonComponent } from '../../organisms/health-certificate-abstract-button/health-certificate-abstract-button.component';
import { AbstractDocumentShareButtonComponent } from '../../../../document-module-api/components/pages/abstract-document-share-button/abstract-document-share-button.component';
import { CertificateWrapperModel } from '../../../CertificateWrapper.model';

@Component({
  selector: 'the-wallet-helth-certificate-share-button',
  template: `
    <the-wallet-share-button
      *ngIf="canShare"
      (click)="share.emit(_shareData)"
    ></the-wallet-share-button>
  `,
  styleUrls: ['./health-certificate-share-button.component.scss'],
})
export class HealthCertificateShareButtonComponent
  extends HealthCertificateAbstractButtonComponent
  implements
    OnInit,
    AbstractDocumentShareButtonComponent<CertificateWrapperModel>
{
  _shareData?: ShareData;
  static readonly FILE_NAME = 'Health_Certificate.png';
  static readonly SHARE_TEXT = 'EU Health Certificate';
  static readonly SHARE_TITLE = 'Health Certificate';

  ngOnInit() {
    this.qrCodeFile$.subscribe((file) => {
      this._shareData = {
        files: [file],
        text: HealthCertificateShareButtonComponent.SHARE_TEXT,
        title: HealthCertificateShareButtonComponent.SHARE_TITLE,
      };
      this.shareContentCreated.emit(this._shareData);
    });
  }

  @Input()
  canShare = false;

  @Output()
  share = new EventEmitter<ShareData>();

  @Output()
  shareContentCreated = new EventEmitter<ShareData>();

  constructor(private _qrCodeService: QRCodeGeneratorService) {
    super(_qrCodeService);
  }
}
