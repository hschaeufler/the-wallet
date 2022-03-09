import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentModel } from '../../../models/Document.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
export class DocumentListComponent {
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

  handleDrop(event: CdkDragDrop<DocumentModel[]>) {
    let sortOrder = this.documentList.map((document) => document.id);
    moveItemInArray(sortOrder, event.previousIndex, event.currentIndex);
    this.sort.emit(sortOrder);
  }
}
