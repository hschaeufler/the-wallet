import {Component, Input} from '@angular/core';

@Component({
  selector: 'the-wallet-page-template',
  template: `
    <ng-content select="[theWalletPageTemplateHeader]"></ng-content>
    <div class="container">
      <main class="main">
        <ng-content></ng-content>
      </main>
    </div>
  `,
  styleUrls: ['./page-template.component.scss']
})
export class PageTemplateComponent {

  @Input()
  title: string = "";

  constructor() { }

}
