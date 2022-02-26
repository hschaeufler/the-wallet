import {Component, Input, OnInit} from '@angular/core';
import {DocumentModel} from "../../../models/Document.model";


@Component({
  selector: 'the-wallet-document-list-element',
  template: `
    <p>
      document-list-element works!
    </p>
  `,
  styleUrls: ['./document-list-element.component.scss']
})
export class DocumentListElementComponent implements OnInit {

  @Input()
  value!: DocumentModel;

  constructor() { }

  ngOnInit(): void {
  }

}
