import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

// Import the standalone components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CateringComponent } from './catering/catering.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'catering', component: CateringComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', redirectTo: 'home' }, // Wildcard route for unknown paths
];

// Provide routing in the application
export const AppRoutingProviders = [
  provideRouter(routes),
];
