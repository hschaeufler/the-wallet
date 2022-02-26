import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-wallet-wallet-page',
  template: `
    <the-wallet-page-template>
      wallet-page works!
      </the-wallet-page-template>
  `,
  styleUrls: ['./wallet-page.component.scss']
})
export class WalletPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
