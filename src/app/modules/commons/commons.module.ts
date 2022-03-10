import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from './pipes/shorten.pipe';
import { InstallPWAButtonComponent } from './components/install-pwabutton/install-pwabutton.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { installPromptServiceProvider } from './services/install-prompt.service.provider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ShortenPipe, InstallPWAButtonComponent],
  imports: [CommonModule, UiComponentsModule, MatIconModule, MatButtonModule],
  providers: [installPromptServiceProvider],
  exports: [ShortenPipe, InstallPWAButtonComponent],
})
export class CommonsModule {}
