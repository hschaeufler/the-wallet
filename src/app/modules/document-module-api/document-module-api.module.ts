import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentPreviewTemplateComponent } from './components/templates/document-preview-template/document-preview-template.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { MatCardModule } from '@angular/material/card';
import { DocumentPreviewActionsDirective } from './directives/document-preview-actions.directive';
import { DocumentPreviewHeaderDirective } from './directives/document-preview-header.directive';
import { DocumentPreviewExpandedContentDirective } from './directives/document-preview-expanded-content.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DocumentCardTemplateComponent } from './components/templates/document-card-template/document-card-template.component';

@NgModule({
  declarations: [
    DocumentPreviewTemplateComponent,
    DocumentPreviewActionsDirective,
    DocumentPreviewHeaderDirective,
    DocumentPreviewExpandedContentDirective,
    DocumentCardTemplateComponent,
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    DocumentPreviewTemplateComponent,
    DocumentPreviewActionsDirective,
    DocumentPreviewExpandedContentDirective,
    DocumentPreviewHeaderDirective,
  ],
})
export class DocumentModuleApiModule {}
