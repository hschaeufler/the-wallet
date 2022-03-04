import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-wallet-route-not-found-page',
  template: `
    <the-wallet-page-template>
      <the-wallet-app-bar title="Wallet" theWalletPageTemplateHeader>
        <ng-container theWalletAppBarStartElements>
          <mat-icon>account_balance_wallet</mat-icon>
        </ng-container>
      </the-wallet-app-bar>
      <h1>Diese Seite existiert nicht!</h1>
      </the-wallet-page-template>
  `,
  styleUrls: ['./route-not-found-page.component.scss']
})
export class RouteNotFoundPageComponent {

  constructor() { }
}
