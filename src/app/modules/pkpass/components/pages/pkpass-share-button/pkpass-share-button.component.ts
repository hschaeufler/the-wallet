import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractDocumentShareButtonComponent } from '../../../../document-module-api/components/pages/abstract-document-share-button/abstract-document-share-button.component';
import { PkpassWrapperModel } from '../../../PkpassWrapper.model';

@Component({
  selector: 'the-wallet-pkpass-share-button',
  template: `
    <ng-container
      *ngIf="
        value &&
        (value.file
          | fileToShareData: value.passType:value.passType) as _shareData
      "
    >
      <the-wallet-share-button
        *ngIf="canShare"
        (click)="share.emit(_shareData)"
      ></the-wallet-share-button>
    </ng-container>
  `,
  styleUrls: ['./pkpass-share-button.component.scss'],
})
export class PkpassShareButtonComponent
  extends AbstractDocumentShareButtonComponent<PkpassWrapperModel>
  implements OnChanges
{
  _shareData?: ShareData;

  readonly SHARE_TITLE = '';

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes &&
      changes['_shareData'] &&
      changes['_shareData'].currentValue
    ) {
      this.shareContentCreated.emit(changes['_shareData'].currentValue);
    }
  }
}
