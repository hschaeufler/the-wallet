import {Component, Input} from '@angular/core';

@Component({
  selector: 'the-wallet-page-template',
  template: `
    <mat-toolbar class="toolbar" color="primary">
      <the-wallet-icon-button>arrow_back_ios</the-wallet-icon-button>
      <span>{{title}}</span>
    </mat-toolbar>
    <!--Used as placeholder, so content is not hidden under Toolbar-->
    <mat-toolbar color="primary">
    </mat-toolbar>
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
