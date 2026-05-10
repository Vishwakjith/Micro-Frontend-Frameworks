import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Root } from './app/root/root';

bootstrapApplication(Root, appConfig).catch((err) => console.error(err));
