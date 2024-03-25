import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
<<<<<<< HEAD

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

=======
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';


>>>>>>> main
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient() ]
};
