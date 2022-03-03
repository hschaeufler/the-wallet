import {Component, Input} from '@angular/core';
import {CertificateWrapperModel} from "../../../CertificateWrapper.model";

@Component({
  selector: 'the-wallet-health-certificate-preview',
  template: `
    <mat-card *ngIf="value">
      <the-wallet-certificate-card-header
        [value]="value.healthCertificate"
        [isVerified]="value.isVerified"
      >
      </the-wallet-certificate-card-header>
      <ng-container *ngIf="expanded">
        <mat-divider></mat-divider>
        <the-wallet-qrcode [value]="value.qrCode"></the-wallet-qrcode>
      </ng-container>
      <mat-divider></mat-divider>
      <mat-card-footer>
        <the-wallet-icon-button (click)="toogleExpand($event)">{{expanded ? "expand_less": "expand_more"}}</the-wallet-icon-button>
      </mat-card-footer>
    </mat-card>
  `,
  styleUrls: ['./health-certificate-preview.component.scss']
})
export class HealthCertificatePreviewComponent {

  expanded = false;

  @Input()
  value?: CertificateWrapperModel;

  toogleExpand($event: MouseEvent) {
    this.expanded = !this.expanded;
  }
}
