import {Component, Input} from '@angular/core';

@Component({
  selector: 'the-wallet-page-template',
  template: `
    <mat-toolbar class="toolbar" color="primary">
      <span>{{title}}</span>
      <button mat-icon-button class="right">
        <mat-icon>arrow_back_ios</mat-icon>
      </button>
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
