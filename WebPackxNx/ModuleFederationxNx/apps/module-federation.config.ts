import { ModuleFederationConfig } from '@nx/module-federation';

const angularSharedLibraries = [
  '@angular/core',
  // '@angular/common',
  // '@angular/router',
  // '@angular/forms',
  // 'rxjs',
];

const config: ModuleFederationConfig = {
  name: 'remote1',
  exposes: {
    './Routes': 'apps/src/app/remote-entry/entry.routes.ts',
  },
  shared: (libraryName: string, sharedConfig) => {
    if (angularSharedLibraries.includes(libraryName)) {
      return {
        ...sharedConfig,
        singleton: true,
        strictVersion: false,
        requiredVersion: sharedConfig?.requiredVersion ? '~' + sharedConfig.requiredVersion : false,
      };
    }
    return sharedConfig;
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
