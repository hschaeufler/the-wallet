import { APP_INITIALIZER } from '@angular/core';
import { installPromptServiceFactory } from './install-pompt.service.factory';
import { InstallPromptService } from './install-prompt.service';

export const installPromptServiceProvider = {
  provide: APP_INITIALIZER,
  useFactory: installPromptServiceFactory,
  deps: [InstallPromptService],
  multi: true,
};
