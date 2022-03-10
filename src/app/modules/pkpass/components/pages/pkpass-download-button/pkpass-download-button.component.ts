import { Component } from '@angular/core';
import { AbstractDocumentDownloadButtonComponent } from '../../../../document-module-api/components/pages/abstract-document-download-button/abstract-document-download-button.component';
import { PkpassWrapperModel } from '../../../PkpassWrapper.model';

@Component({
  selector: 'the-wallet-pkpass-download-button',
  template: `
    <the-wallet-download-button
      *ngIf="value"
      (click)="
        download.emit([
          value.file,
          value.passType + PKPASS_DEFAUL_FILE_EXTENSION
        ])
      "
    ></the-wallet-download-button>
  `,
  styleUrls: ['./pkpass-download-button.component.scss'],
})
export class PkpassDownloadButtonComponent extends AbstractDocumentDownloadButtonComponent<PkpassWrapperModel> {
  readonly PKPASS_DEFAUL_FILE_EXTENSION = '.pkpass';

  constructor() {
    super();
  }
}
