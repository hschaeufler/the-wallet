import {Component, OnInit} from '@angular/core';
import {concatMap, map, tap, throwError} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {DocumentStoreService} from "../../../store/document-store.service";
import {CertificateWrapperModel} from "../../../modules/health-certificate/CertificateWrapper.model";


@Component({
  selector: 'the-wallet-certificate-page',
  template: `
    <the-wallet-page-template>
      <the-wallet-health-certificate *ngIf="certificateWrapper"
                                     [value]="certificateWrapper"></the-wallet-health-certificate>
    </the-wallet-page-template>
  `,
  styleUrls: ['./document-page.component.scss']
})
export class DocumentPageComponent implements OnInit {

  certificateWrapper?: CertificateWrapperModel;

  constructor(
    private route: ActivatedRoute,
    private documentStore: DocumentStoreService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      tap(params => console.log(params)),
      map(params => params["id"]),
      tap(id => console.log(id)),
      concatMap(id => this.documentStore.getDocument(id)),
      map(document => {
        if(!document) {
          throwError(() => "Document does not Exist")
        }
        return (document!.content as CertificateWrapperModel);
      })
    ).subscribe((certificate) => this.certificateWrapper = certificate);
  }

}
