import { enableProdMode, ENVIRONMENT_INITIALIZER, inject, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppComponent } from '@app/app.component';
import { appRoutes } from '@app/app.routes';
import { environment } from '@environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { asyncValidators, validators } from '@app/validators/validators';
import { MODEL_ASYNC_VALIDATORS, MODEL_VALIDATORS } from '@app/validation/interfaces';
import { DataService, RemoteDataService } from '@services';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule, HttpClientModule),
    importProvidersFrom(RouterModule.forRoot(appRoutes)),
    {provide: MODEL_ASYNC_VALIDATORS, useValue: asyncValidators },
    {provide: MODEL_VALIDATORS, useValue: validators },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue() {
        inject(RemoteDataService).init();
        inject(DataService).init();
      }
    }
  ]
}).catch(err => console.error(err));
