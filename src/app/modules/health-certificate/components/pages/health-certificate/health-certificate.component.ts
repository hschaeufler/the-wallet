import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CovidCertificateService } from '../../../services/covid-certificate.service';
import { Observable } from 'rxjs';
import { HealthCertificateModel } from 'covid-certificate-checker/dist/lib/models/HealthCertificate.model';
import { CertificateWrapperModel } from '../../../CertificateWrapper.model';
import { AbstractDocumentComponent } from '../../../../document-module-api/components/pages/abstract-document/abstract-document.component';

@Component({
  selector: 'the-wallet-health-certificate',
  template: `
    <ng-container
      *ngIf="healthCertificateClaim$ | async as healthCertificateClaim"
    >
      <the-wallet-heatlh-certificate-card
        [value]="healthCertificateClaim.healthCertificate"
        [qrCode]="value!.qrCode"
        [isVerified]="healthCertificateClaim.isVerified"
      >
      </the-wallet-heatlh-certificate-card>
    </ng-container>
  `,
  styleUrls: ['./health-certificate.component.scss'],
})
export class HealthCertificateComponent
  extends AbstractDocumentComponent<CertificateWrapperModel>
  implements OnChanges
{
  healthCertificateClaim$?: Observable<{
    healthCertificate: HealthCertificateModel;
    isVerified: boolean;
  }>;

  constructor(private covidCertificateService: CovidCertificateService) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['value'] && changes['value'].currentValue) {
      this.healthCertificateClaim$ = this.covidCertificateService.decode(
        changes['value'].currentValue
      );
    }
  }
}
