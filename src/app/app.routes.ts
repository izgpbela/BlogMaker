import { Routes } from '@angular/router';
<<<<<<< HEAD
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/register.component').then(m => m.RegisterComponent) },
  { path: 'themes', loadComponent: () => import('./pages/themes.component').then(m => m.ThemesComponent) },
  { path: 'create-post', loadComponent: () => import('./pages/create-post.component').then(m => m.CreatePostComponent), canActivate: [authGuard] },
  { path: 'analytics', loadComponent: () => import('./pages/analytics.component').then(m => m.AnalyticsComponent), canActivate: [authGuard] },
  { path: 'home', loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent) }
];
=======

export const routes: Routes = [];
>>>>>>> 53478f649f281b03e87fcf4290bcb8a8eeef2331
