import { Component } from '@angular/core';
import { AbstractDocumentComponent } from '../../../../document-module-api/components/pages/abstract-document/abstract-document.component';
import { PkpassWrapperModel } from '../../../PkpassWrapper.model';

@Component({
  selector: 'the-wallet-pkpass',
  template: `
    <the-wallet-pkpass-card [value]="value"></the-wallet-pkpass-card>
  `,
  styleUrls: ['./pkpass.component.scss'],
})
export class PkpassComponent extends AbstractDocumentComponent<PkpassWrapperModel> {
  constructor() {
    super();
  }
}
