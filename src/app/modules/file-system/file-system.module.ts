import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSystemService } from './services/FileSystem.service';
import { detectFileSystemAccessApi } from './services/file-system-access-api.utils';
import { DomFileApiService } from './services/dom-file-api.service';
import { FileSystemAccessApiService } from './services/file-system-access-api.service';

@NgModule({
  declarations: [],
  providers: [
    {
      provide: FileSystemService,
      useExisting: forwardRef(() => {
        return detectFileSystemAccessApi()
          ? FileSystemAccessApiService
          : DomFileApiService;
      }),
    },
  ],
  imports: [CommonModule],
})
export class FileSystemModule {}
