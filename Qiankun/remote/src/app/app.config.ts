import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    // Removed provideBrowserGlobalErrorListeners to avoid global modifications in Qiankun
  ]
};
