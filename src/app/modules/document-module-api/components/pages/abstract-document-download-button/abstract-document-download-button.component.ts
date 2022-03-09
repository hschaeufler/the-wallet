import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive()
export class AbstractDocumentDownloadButtonComponent<T> {
  @Input()
  value?: T;

  @Output()
  download = new EventEmitter<[File, string?]>();
}
