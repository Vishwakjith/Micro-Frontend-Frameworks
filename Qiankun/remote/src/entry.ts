import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationRef } from '@angular/core';
import { App } from './app/app';
import { appConfig } from './app/app.config';

let appRef: ApplicationRef | null = null;

const render = async () => {
  // Only render once - don't create multiple instances
  if (appRef) {
    console.log('[remote] App already rendered, reusing instance');
    console.log((window as any).remotes);
    // return appRef;
  }

  try {
    const app = await bootstrapApplication(App, appConfig);
    appRef = app.injector.get(ApplicationRef);
    console.log(app);
    console.log(appRef);

    console.log('[remote] App rendered successfully');
    console.log((window as any).remotes);
    // return appRef;
  } catch (err) {
    console.error('[remote] Error rendering app:', err);
    throw err;
  }
};

// Qiankun lifecycle hooks - MUST be exported as module exports
const bootstrap = async () => {
  console.log('[remote] bootstrap', (window as any).__POWERED_BY_QIANKUN__ ? 'via Qiankun' : 'standalone');
  console.log((window as any).remotes);

  // return render();
};

const mount = async () => {
  console.log('[remote] mount', (window as any).__POWERED_BY_QIANKUN__ ? 'via Qiankun' : 'standalone');
  console.log((window as any).remotes);

  return render();
};

const unmount = async () => {
  console.log('[remote] unmount', (window as any).__POWERED_BY_QIANKUN__ ? 'via Qiankun' : 'standalone');
  console.log((window as any).remotes);

  if (appRef) {
    appRef.destroy();
    appRef = null;
    console.log('[remote] App destroyed');
  }
};

(window as any).remotes = { bootstrap, mount, unmount };

// Standalone mode - when app is loaded directly (not via Qiankun)
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render().catch(err => console.error('[remote] Failed to render:', err));
}
