import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
  enableProdMode();
} else {
  const sysinfo = {
    uniacid: 2,
    siteroot: 'localhost'
  };
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
