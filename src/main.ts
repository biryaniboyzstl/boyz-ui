// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { AppRoutingProviders } from './app/app.routes';
//
// bootstrapApplication(AppComponent, {
//   providers: [AppRoutingProviders],
// }).catch(err => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
