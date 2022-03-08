import { Directive, Input } from '@angular/core';
import { CertificateWrapperModel } from '../../../CertificateWrapper.model';
import { concatMap, Subject } from 'rxjs';
import { dataURLToFile } from '../../../../commons/utils/image-conversion.utils';
import { HealthCertificateShareButtonComponent } from '../../pages/helth-certificate-share-button/health-certificate-share-button.component';
import { QRCodeGeneratorService } from '../../../../qrcode-generator/services/qrcode-generator.service';

@Directive()
export abstract class HealthCertificateAbstractButtonComponent {
  private _value?: CertificateWrapperModel;
  private qrCodeFileSource = new Subject<File>();

  qrCodeFile$ = this.qrCodeFileSource.asObservable();

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
        .subscribe({
          next: (file) => this.qrCodeFileSource.next(file),
        });
    }
  }

  constructor(private qrCodeService: QRCodeGeneratorService) {}
}
