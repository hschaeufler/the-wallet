import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-wallet-route-not-found-page',
  template: `
    <p>
      Ups! Something went wrong. :(
    </p>
  `,
  styleUrls: ['./route-not-found-page.component.scss']
})
export class RouteNotFoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
