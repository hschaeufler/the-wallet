import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CertificateWrapperModel } from '../../../CertificateWrapper.model';
import { concatMap } from 'rxjs';
import { dataURLToFile } from '../../../../commons/utils/image-conversion.utils';
import { QRCodeGeneratorService } from '../../../../qrcode-generator/services/qrcode-generator.service';

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
export class HealthCertificateShareButtonComponent {
  private _value?: CertificateWrapperModel;
  _shareData?: ShareData;
  static readonly FILE_NAME = 'Health_Certificate.png';
  static readonly SHARE_TEXT = 'EU Health Certificate';
  static readonly SHARE_TITLE = 'Health Certificate';

  @Input()
  get value(): CertificateWrapperModel | undefined {
    return this._value;
  }
  set value(value: CertificateWrapperModel | undefined) {
    if (value) {
      this._value = value;
      this.qrCodeService
        .toDataURL(value.qrCode)
        .pipe(
          concatMap((dataURL) =>
            dataURLToFile(
              dataURL,
              HealthCertificateShareButtonComponent.FILE_NAME
            )
          )
        )
        .subscribe((file) => {
          this._shareData = {
            files: [file],
            text: HealthCertificateShareButtonComponent.SHARE_TEXT,
            title: HealthCertificateShareButtonComponent.SHARE_TITLE,
          };
          this.shareContentCreated.emit(this._shareData);
        });
    }
  }

  @Input()
  canShare = false;

  @Output()
  share = new EventEmitter<ShareData>();

  @Output()
  shareContentCreated = new EventEmitter<ShareData>();

  constructor(private qrCodeService: QRCodeGeneratorService) {}
}
