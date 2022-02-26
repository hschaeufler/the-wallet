import { Component } from '@angular/core';

@Component({
  selector: 'the-wallet-page-template',
  template: `
    <div class="container">
      <main class="main">
        <ng-content></ng-content>
      </main>
    </div>
  `,
  styleUrls: ['./page-template.component.scss']
})
export class PageTemplateComponent {

  constructor() { }

}
