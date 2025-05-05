import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostagensComponent } from './pages/postagens/postagens.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'postagens', component: PostagensComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
// Adicione outras rotas conforme necessário
