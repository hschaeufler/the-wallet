import {Component, Input} from '@angular/core';
import {CertificateWrapperModel} from "../../../CertificateWrapper.model";

@Component({
  selector: 'the-wallet-health-certificate-preview',
  template: `
    <mat-card *ngIf="value" class="health-certificate-preview">
      <the-wallet-certificate-card-header
        [value]="value.healthCertificate"
        [isVerified]="value.isVerified"
        [routerLink]="link"
      >
      </the-wallet-certificate-card-header>
      <ng-container *ngIf="expanded">
        <mat-divider></mat-divider>
        <the-wallet-qrcode
          [value]="value.qrCode"
          [routerLink]="link">
        </the-wallet-qrcode>
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

  @Input()
  link?: string | any[];

  toogleExpand($event: MouseEvent) {
    this.expanded = !this.expanded;
  }
}
