import {Component, Input, OnInit} from '@angular/core';
import products from "../../../assets/ehn-dcc-valuesets/vaccine-medicinal-product.json"
import {CovidCertificateService} from "../services/covid-certificate.service";
import {HealthCertificateClaim} from "covid-certificate-checker/dist/lib/models/HealthCertificateClaim";


@Component({
  selector: 'the-wallet-health-certificate',
  template: `
    <the-wallet-heatlh-certificate-card value="">
    </the-wallet-heatlh-certificate-card>
  `,
  styleUrls: ['./health-certificate.component.scss']
})
export class HealthCertificateComponent implements OnInit {

  @Input()
  value?: string;

  isVerified?: boolean;
  hcert?: HealthCertificateClaim;

  name: string = "Max Mustermann";

  constructor(private covidCertificateService: CovidCertificateService) {
  }

  ngOnInit(): void {
    if (this.value) {
      console.log(this.value);
      this.covidCertificateService.decode(this.value).subscribe({
        next: result => {
          this.isVerified = result.isVerified;
          this.hcert = result.healthCertificateClaim;
          debugger;
          console.log(this.hcert);
        },
        error: err => console.log(err),
      });
    }
  }

}
