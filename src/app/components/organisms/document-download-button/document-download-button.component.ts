import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentModel } from '../../../models/Document.model';
import { DocumentTypeEnum } from '../../../models/DocumentType.enum';
import { FileSystemService } from '../../../modules/file-system/services/FileSystem.service';

@Component({
  selector: 'the-wallet-document-download-button',
  template: `
    <ng-container *ngIf="value" [ngSwitch]="value.type">
      <the-wallet-health-certificate-download-button
        *ngSwitchCase="documentTypeEnum.HEALTHCERTIFICATE"
        [value]="value.content"
        (download)="onDownload($event)"
      >
      </the-wallet-health-certificate-download-button>
    </ng-container>
  `,
  styleUrls: ['./document-download-button.component.scss'],
})
export class DocumentDownloadButtonComponent {
  static readonly DEFAULT_FILE_EXTENSION = '.png';
  static readonly DEFAULT_MIME_TYPE = 'image/png';

  @Input()
  value?: DocumentModel;

  @Output()
  error = new EventEmitter<any>();

  @Output()
  documentDownloaded = new EventEmitter<DocumentModel>();

  documentTypeEnum = DocumentTypeEnum;

  constructor(private fileSystemService: FileSystemService) {}

  onDownload(download: [File, string?]) {
    const [file, fileName] = download;
    const mimeType = file.type
      ? file.type
      : DocumentDownloadButtonComponent.DEFAULT_MIME_TYPE;
    const fileExtension = file.type
      ? '.' + file.type.split('/')[1]
      : DocumentDownloadButtonComponent.DEFAULT_FILE_EXTENSION;

    let fileTypeRecord: Record<string, string> = {};
    fileTypeRecord[mimeType] = fileExtension;

    this.fileSystemService
      .writeFile(file, fileName, [
        {
          accept: fileTypeRecord,
        },
      ])
      .subscribe({
        next: () => this.documentDownloaded.emit(this.value),
        error: (err) => this.error.emit(err),
      });
  }
}
