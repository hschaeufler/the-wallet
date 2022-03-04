import {Component, Input} from '@angular/core';
import {CertificateWrapperModel} from "../../../CertificateWrapper.model";

@Component({
  selector: 'the-wallet-health-certificate-preview',
  template: `
    <mat-card *ngIf="value" [class]="expand ? 'health-certificate-expanded' : ''">
      <the-wallet-certificate-card-header
        [value]="value.healthCertificate"
        [isVerified]="value.isVerified"
        [routerLink]="link"
      >
      </the-wallet-certificate-card-header>
      <ng-container *ngIf="expand">
        <the-wallet-qrcode
          [value]="value.qrCode"
          [routerLink]="link">
        </the-wallet-qrcode>
      </ng-container>
      <mat-card-footer>
        <the-wallet-icon-button
          (click)="toogleExpand($event)">{{expand ? "expand_less" : "expand_more"}}</the-wallet-icon-button>
      </mat-card-footer>
    </mat-card>
  `,
  styleUrls: ['./health-certificate-preview.component.scss']
})
export class HealthCertificatePreviewComponent {

  @Input()
  expand = false;

  @Input()
  value?: CertificateWrapperModel;

  @Input()
  link?: string | any[];

  toogleExpand($event: MouseEvent) {
    this.expand = !this.expand;
  }
}
