import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DragAndDropStateService {
  dragAndDropEnabledSource = new BehaviorSubject<boolean>(false);
  dragAndDropEnabled$ = this.dragAndDropEnabledSource.asObservable();

  constructor() {}

  setDragAndDropState(dragDropEnabled: boolean) {
    this.dragAndDropEnabledSource.next(dragDropEnabled);
  }
}
