import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'my-presets',
    component: AppComponent,
  },
  {
    path: 'explore',
    component: AppComponent,
  },
];
