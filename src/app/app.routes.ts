import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/register.component').then(m => m.RegisterComponent) },
  { path: 'themes', loadComponent: () => import('./pages/themes.component').then(m => m.ThemesComponent) },
  { path: 'create-post', loadComponent: () => import('./pages/create-post.component').then(m => m.CreatePostComponent), canActivate: [authGuard] },
  { path: 'analytics', loadComponent: () => import('./pages/analytics.component').then(m => m.AnalyticsComponent), canActivate: [authGuard] },
  { path: 'home', loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent) },
  { path: 'theme/:theme', loadComponent: () => import('./pages/theme-posts.component').then(m => m.ThemePostsComponent) },
  { path: 'post/:id', loadComponent: () => import('./pages/post-detail.component').then(m => m.PostDetailComponent) }
];


