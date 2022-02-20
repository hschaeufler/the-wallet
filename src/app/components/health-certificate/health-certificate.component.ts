import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-wallet-health-certificate',
  template: `
    <p>
      health-certificate works!
    </p>
  `,
  styleUrls: ['./health-certificate.component.scss']
})
export class HealthCertificateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
