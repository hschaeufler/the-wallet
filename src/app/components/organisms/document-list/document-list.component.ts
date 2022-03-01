import {Component, Input, OnInit} from '@angular/core';
import {DocumentModel} from "../../../models/Document.model";

@Component({
  selector: 'the-wallet-document-list',
  template: `
    <mat-list cdkDropList>
      <mat-list-item cdkDrag *ngFor="let document of documentList">
        <the-wallet-document-list-element [value]="document">
        </the-wallet-document-list-element>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {

  @Input()
  documentList: DocumentModel[] = [];

}
