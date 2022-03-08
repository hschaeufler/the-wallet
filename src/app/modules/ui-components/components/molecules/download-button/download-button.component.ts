import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-wallet-download-button',
  template: `<the-wallet-icon-button>download</the-wallet-icon-button>`,
  styleUrls: ['./download-button.component.scss'],
})
export class DownloadButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
