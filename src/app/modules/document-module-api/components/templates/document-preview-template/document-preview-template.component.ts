import { Component, Input } from '@angular/core';

@Component({
  selector: 'the-wallet-document-preview-template',
  template: `
    <mat-card [class]="expand ? 'document-preview-expanded' : ''">
      <ng-container *ngIf="!isLoading; else spinner">
        <ng-content select="[theWalletDocumentPreviewHeader]"></ng-content>
        <ng-container *ngIf="expand">
          <ng-content
            select="[theWalletDocumentPreviewExpandedContent]"
          ></ng-content>
        </ng-container>
        <mat-card-footer class="document-preview-footer">
          <the-wallet-icon-button (click)="toogleExpand($event)">{{
            expand ? 'expand_less' : 'expand_more'
          }}</the-wallet-icon-button>
          <div class="document-preview-actions">
            <ng-content select="[theWalletDocumentPreviewActions]"></ng-content>
          </div>
        </mat-card-footer>
      </ng-container>
      <ng-template #spinner>
        <mat-spinner></mat-spinner>
      </ng-template>
    </mat-card>
  `,
  styleUrls: ['./document-preview-template.component.scss'],
})
export class DocumentPreviewTemplateComponent {
  @Input()
  expand = false;

  @Input()
  isLoading = false;

  toogleExpand($event: MouseEvent) {
    this.expand = !this.expand;
  }
}
