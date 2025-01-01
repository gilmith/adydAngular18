import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ToastService } from './services/toastService/toast.service';
import { spinnerInterceptor } from './shared/interceptors/spinner.interceptor';
import { headerInterceptor } from './shared/interceptors/header-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient( withInterceptors([headerInterceptor, spinnerInterceptor])),
    ToastService
  ]
};
