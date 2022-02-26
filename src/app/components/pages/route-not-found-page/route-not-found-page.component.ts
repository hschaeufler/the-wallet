import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-wallet-route-not-found-page',
  template: `
    <the-wallet-page-template>
      Ups! Something went wrong. :(
      </the-wallet-page-template>
  `,
  styleUrls: ['./route-not-found-page.component.scss']
})
export class RouteNotFoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
