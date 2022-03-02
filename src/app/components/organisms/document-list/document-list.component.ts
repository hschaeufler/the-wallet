import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DocumentModel} from "../../../models/Document.model";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'the-wallet-document-list',
  template: `
    <div
      cdkDropList
      (cdkDropListDropped)="handleDrop($event)"
    >
        <the-wallet-document-list-element
          cdkDrag
          *ngFor="let document of documentList"
          [value]="document">
        </the-wallet-document-list-element>
    </div>
  `,
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {

  @Input()
  documentList: DocumentModel[] = [];

  @Output()
  sort = new EventEmitter<string[]>();

  handleDrop(event: CdkDragDrop<DocumentModel[]>) {
    let sortOrder = this.documentList.map(document => document.id)
    moveItemInArray(sortOrder, event.previousIndex, event.currentIndex);
    this.sort.emit(sortOrder);
  }

}
