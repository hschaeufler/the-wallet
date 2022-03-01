import {Component, Input, OnInit} from '@angular/core';
import {DocumentModel} from "../../../models/Document.model";
import {DocumentTypeEnum} from "../../../models/DocumentType.enum";


@Component({
  selector: 'the-wallet-document-list-element',
  template: `
    <ng-container [ngSwitch]="value.type">
      <the-wallet-health-certificate-preview
        class="cursor-link"
        [routerLink]="['/document', value.id]"
        *ngSwitchCase=documentTypeEnum.HEALTHCERTIFICATE
        [value]="value.content"
      >
      </the-wallet-health-certificate-preview>
    </ng-container>
  `,
  styleUrls: ['./document-list-element.component.scss']
})
export class DocumentListElementComponent implements OnInit {

  @Input()
  value!: DocumentModel;

  documentTypeEnum = DocumentTypeEnum;



  constructor() { }

  ngOnInit(): void {
  }

}
