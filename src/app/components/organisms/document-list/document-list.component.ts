import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { DocumentModel } from '../../../models/Document.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragAndDropStateService } from '../../molecules/drag-drop-slider/drag-and-drop-state.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'the-wallet-document-list',
  template: `
    <div
      cdkDropList
      (cdkDropListDropped)="handleDrop($event)"
      class="document-list"
    >
      <div
        *ngFor="let document of documentList"
        class="document-list-element"
        cdkDrag
        [cdkDragDisabled]="!dragAndDropEnabled"
      >
        <the-wallet-document-list-element
          [value]="document"
          (delete)="delete.emit($event)"
          (showMore)="showMore.emit($event)"
          (error)="error.emit($event)"
          (documentShared)="documentShared.emit($event)"
          (documentDownloaded)="documentDownloaded.emit($event)"
        >
        </the-wallet-document-list-element>
      </div>
    </div>
  `,
  styleUrls: ['./document-list.component.scss'],
})
export class DocumentListComponent implements OnDestroy {
  @Input()
  documentList: DocumentModel[] = [];

  @Output()
  sort = new EventEmitter<string[]>();

  @Output()
  delete = new EventEmitter<string>();

  @Output()
  showMore = new EventEmitter<string>();

  @Output()
  error = new EventEmitter<any>();

  @Output()
  documentShared = new EventEmitter<DocumentModel>();

  @Output()
  documentDownloaded = new EventEmitter<DocumentModel>();

  dragAndDropEnabled = false;

  private dragAndDropEnabledSubscription$: Subscription;

  constructor(dragAndDropState: DragAndDropStateService) {
    this.dragAndDropEnabledSubscription$ =
      dragAndDropState.dragAndDropEnabled$.subscribe(
        (dragAndDropEnabled) => (this.dragAndDropEnabled = dragAndDropEnabled)
      );
  }

  handleDrop(event: CdkDragDrop<DocumentModel[]>) {
    let sortOrder = this.documentList.map((document) => document.id);
    moveItemInArray(sortOrder, event.previousIndex, event.currentIndex);
    this.sort.emit(sortOrder);
  }

  ngOnDestroy(): void {
    if (this.dragAndDropEnabledSubscription$) {
      this.dragAndDropEnabledSubscription$.unsubscribe();
    }
  }
}
