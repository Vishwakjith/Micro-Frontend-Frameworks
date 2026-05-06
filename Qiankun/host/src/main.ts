import { bootstrapApplication } from '@angular/platform-browser';
import { registerMicroApps, start } from 'qiankun';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => {
    registerMicroApps([
      {
        name: 'remote',
        entry: 'http://localhost:4202/',
        container: '#remote-container',
        activeRule: (location) => location.pathname.startsWith('/remote')
      }
    ]);

    if (!(window as any).qiankunStarted) {
      (window as any).qiankunStarted = true;
      start({
        sandbox: { strictStyleIsolation: true },
      });
    }
  })
  .catch((err) => console.error(err));
