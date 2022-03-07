import { Component, OnInit } from '@angular/core';
import { concatMap, map, tap, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentStoreService } from '../../../store/document-store.service';
import { CertificateWrapperModel } from '../../../modules/health-certificate/CertificateWrapper.model';
import { WebShareService } from '../../../modules/web-share/services/web-share.service';
import { QRCodeGeneratorService } from '../../../modules/qrcode-generator/services/qrcode-generator.service';
import {
  dataUrlToBlob,
  dataURLToFile,
} from '../../../utils/image-conversion.utils';
import { UserMessageService } from '../../../modules/ui-components/services/user-message.service';

@Component({
  selector: 'the-wallet-certificate-page',
  template: `
    <the-wallet-page-template>
      <the-wallet-app-bar
        title="Certificate Details"
        theWalletPageTemplateHeader
      >
        <ng-container theWalletAppBarStartElements>
          <the-wallet-icon-button (click)="goBack($event)"
            >arrow_back_ios</the-wallet-icon-button
          >
          <mat-icon>privacy_tip</mat-icon>
        </ng-container>
        <ng-container theWalletAppBarEndElements>
          <the-wallet-icon-button (click)="delete($event)">
            delete_forever
          </the-wallet-icon-button>
          <the-wallet-icon-button *ngIf="canShare()" (click)="share($event)">
            share
          </the-wallet-icon-button>
        </ng-container>
      </the-wallet-app-bar>
      <the-wallet-health-certificate
        *ngIf="certificateWrapper"
        [value]="certificateWrapper"
      ></the-wallet-health-certificate>
    </the-wallet-page-template>
  `,
  styleUrls: ['./document-page.component.scss'],
})
export class DocumentPageComponent implements OnInit {
  certificateWrapper?: CertificateWrapperModel;
  id?: string;
  file?: File;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private documentStore: DocumentStoreService,
    private webShareService: WebShareService,
    private qrCodeService: QRCodeGeneratorService,
    private userMessageService: UserMessageService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        tap((params) => console.log(params)),
        map((params) => params['id']),
        tap((id) => (this.id = id)),
        concatMap((id) => this.documentStore.getDocument(id)),
        map((document) => {
          if (!document) {
            throwError(() => 'Document does not Exist');
          }
          return document!.content as CertificateWrapperModel;
        }),
        //Generate a QR-Code-Image-File for Webshare-Api
        tap((certificateWrapper) => {
          this.qrCodeService
            .toDataURL(certificateWrapper.qrCode)
            .pipe(
              concatMap((dataURl) =>
                dataURLToFile(dataURl, 'Health_Certificate.png')
              )
            )
            .subscribe((file) => {
              console.log(file);
              this.file = file;
            });
        })
      )
      .subscribe((certificate) => (this.certificateWrapper = certificate));
  }

  goBack($event: MouseEvent) {
    this.router.navigate(['wallet']);
  }

  delete($event: MouseEvent) {
    if (this.id) {
      this.documentStore.deleteDocument(this.id).subscribe({
        next: () => this.router.navigate(['wallet']),
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  canShare() {
    const canShare =
      !!this.file && this.webShareService.canShare({ files: [this.file] });
    console.log(canShare);
    return canShare;
  }

  share($event: MouseEvent) {
    this.webShareService
      .share({
        files: [this.file!],
        text: 'Health Certificate',
        title: 'Health Certificate',
      })
      .subscribe({
        error: (err) => this.userMessageService.showErrorMessage(err),
      });
  }
}
