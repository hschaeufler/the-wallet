import {Component, OnInit} from '@angular/core';
import {concatMap, map, tap, throwError} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentStoreService} from "../../../store/document-store.service";
import {CertificateWrapperModel} from "../../../modules/health-certificate/CertificateWrapper.model";


@Component({
  selector: 'the-wallet-certificate-page',
  template: `
    <the-wallet-page-template>
      <the-wallet-app-bar title="Certificate Details" theWalletPageTemplateHeader>
        <ng-container theWalletAppBarStartElements>
          <the-wallet-icon-button (click)="goBack($event)">arrow_back_ios</the-wallet-icon-button>
          <mat-icon>privacy_tip</mat-icon>
        </ng-container>
        <ng-container theWalletAppBarEndElements>
          <the-wallet-icon-button (click)="delete($event)">delete_forever</the-wallet-icon-button>
        </ng-container>
      </the-wallet-app-bar>
      <the-wallet-health-certificate *ngIf="certificateWrapper"
                                     [value]="certificateWrapper"></the-wallet-health-certificate>
    </the-wallet-page-template>
  `,
  styleUrls: ['./document-page.component.scss']
})
export class DocumentPageComponent implements OnInit {

  certificateWrapper?: CertificateWrapperModel;
  id?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private documentStore: DocumentStoreService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      tap(params => console.log(params)),
      map(params => params["id"]),
      tap(id => this.id = id),
      concatMap(id => this.documentStore.getDocument(id)),
      map(document => {
        if(!document) {
          throwError(() => "Document does not Exist")
        }
        return (document!.content as CertificateWrapperModel);
      })
    ).subscribe((certificate) => this.certificateWrapper = certificate);
  }

  goBack($event: MouseEvent) {
    this.router.navigate(["wallet"]);
  }

  delete($event: MouseEvent) {
    if(this.id) {
      this.documentStore.deleteDocument(this.id).subscribe({
        next: () => this.router.navigate(["wallet"]),
        error: err => {console.error(err)}
      });
    }
  }
}
