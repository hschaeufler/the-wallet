import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive()
export class AbstractDocumentShareButtonComponent<T> {
  @Input()
  value?: T;

  @Input()
  canShare = false;

  @Output()
  share = new EventEmitter<ShareData>();

  @Output()
  shareContentCreated = new EventEmitter<ShareData>();
}
