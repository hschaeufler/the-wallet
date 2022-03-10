import { Component, Input } from '@angular/core';
import { blobToDataURL } from '../../../../commons/utils/image-conversion.utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'the-wallet-blob-image',
  template: `
    <img
      *ngIf="imageURL$ | async as imageURL"
      [src]="imageURL"
      class="blob-image"
    />
  `,
  styleUrls: ['./blob-image.component.scss'],
})
export class BlobImageComponent {
  imageURL$?: Observable<string>;
  private _blob?: Blob;

  @Input()
  get blob() {
    return this._blob;
  }
  set blob(blob: Blob | undefined) {
    this._blob = blob;
    if (blob) {
      console.log(blob);
      this.imageURL$ = blobToDataURL(blob);
    }
  }

  constructor() {}
}
