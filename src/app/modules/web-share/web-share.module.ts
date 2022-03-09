import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileToShareDataPipe } from './pipes/file-to-share-data.pipe';

@NgModule({
  declarations: [FileToShareDataPipe],
  imports: [CommonModule],
  exports: [FileToShareDataPipe],
})
export class WebShareModule {}
