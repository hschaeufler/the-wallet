import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-wallet-document-template',
  template: `
    <div class="document">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./document-template.component.scss'],
})
export class DocumentTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
