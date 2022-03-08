import { Directive, Input } from '@angular/core';

@Directive()
export abstract class AbstractDocumentComponent<T> {
  @Input()
  value?: T;
}
