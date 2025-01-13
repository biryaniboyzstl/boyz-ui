import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingProviders } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [AppRoutingProviders],
}).catch(err => console.error(err));
