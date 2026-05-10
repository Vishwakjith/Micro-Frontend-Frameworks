import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadChildren: async () => {
      return await loadRemote<typeof import('remote1/Routes')>(
        'remote1/Routes',
      ).then((m) => m.remoteRoutes);
    },
  },
];
