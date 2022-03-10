import { InstallPromptService } from './install-prompt.service';

export const installPromptServiceFactory = (
  installPromptService: InstallPromptService
) => {
  return () => installPromptService.init();
};
