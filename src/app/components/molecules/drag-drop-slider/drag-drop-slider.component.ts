import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DragAndDropStateService } from './drag-and-drop-state.service';

@Component({
  selector: 'the-wallet-drag-drop-slider',
  template: `
    <mat-slide-toggle [formControl]="dragAndDropEnabled"
      ><mat-icon>touch_app</mat-icon></mat-slide-toggle
    >
  `,
  styleUrls: ['./drag-drop-slider.component.scss'],
})
export class DragDropSliderComponent {
  dragAndDropEnabled = new FormControl(false);

  constructor(dragAndDropState: DragAndDropStateService) {
    this.dragAndDropEnabled.valueChanges.subscribe((value) =>
      dragAndDropState.setDragAndDropState(value)
    );
  }
}
