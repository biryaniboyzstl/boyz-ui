import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CateringComponent } from './catering/catering.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { OrderOnlineComponent } from './order-online/order-online.component';
import { BakeryComponent } from './bakery/bakery.component'; // Import BakeryComponent
import { BarComponent } from './bar/bar.component'; // Import BarComponent

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'catering', component: CateringComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'bakery', component: BakeryComponent }, // New Bakery route
  { path: 'bar', component: BarComponent }, // New Bar route
  { path: 'order', component: OrderOnlineComponent },
  { path: '**', redirectTo: 'home' } // Fallback route for unmatched URLs
];

export const AppRoutingProviders = [provideRouter(routes)];
