import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'the-wallet-app-bar',
  template: `
    <mat-toolbar class="toolbar" color="primary">
      <ng-content select="[theWalletAppBarStartElements]"></ng-content>
      <span>{{title}}</span>
      <div class="app-bar-end-elements">
      <ng-content
        select="[theWalletAppBarEndElements]"></ng-content>
      </div>
    </mat-toolbar>
    <!--Used as placeholder, so content is not hidden under Toolbar-->
    <mat-toolbar color="primary">
    </mat-toolbar>
  `,
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {

  @Input()
  title = "";

  constructor() { }
}
