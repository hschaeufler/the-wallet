import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive()
export abstract class AbstractDocumentPreviewComponent<T> {
  @Input()
  expand = false;

  @Input()
  value?: T;

  @Output()
  showMore = new EventEmitter<T>();

  toogleExpand($event: MouseEvent) {
    this.expand = !this.expand;
  }

  constructor() {}
}
