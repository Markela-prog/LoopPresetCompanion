import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'my-presets',
    component: AppComponent,
    canActivate: [authGuard],
  },
  {
    path: 'explore',
    component: AppComponent,
  },
];
