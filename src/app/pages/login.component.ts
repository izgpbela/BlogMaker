import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Add this import
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule // Add this to imports array
  ],
  template: `
    <div class="login">
      <div class="login__container">
        <form class="login__form" [formGroup]="loginForm" (ngSubmit)="onLogin()">
          <div class="login__title">
            <h1 class="poppins-semibold">Seja bem-vindo</h1>
            <p class="poppins-light">Realize o login para acessar as funcionalidades do sistema</p>
          </div>
          
          <div class="login__fields">
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Email ou Usuário</mat-label>
              <input matInput formControlName="username" placeholder="Digite seu email ou usuário" required>
              <mat-icon matPrefix>person</mat-icon>
            </mat-form-field>
          </div>
          
          <div class="login__fields">
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Senha</mat-label>
              <input matInput formControlName="password" type="password" placeholder="Digite sua senha" required>
              <mat-icon matPrefix>lock</mat-icon>
            </mat-form-field>
          </div>
          
          <div class="login__alert-message">
            @if(loginForm.invalid && loginForm.touched) {
              @if(loginForm.hasError('required')) {
                <p class="poppins-semibold">Preencha todos os campos</p>
              }
              @if(loginForm.hasError('invalidCredentials')) {
                <p class="poppins-semibold">Credenciais inválidas</p>
              }
              @if(loginForm.hasError('generalCredentialsError')) {
                <p class="poppins-semibold">Ocorreu um erro inesperado, tente novamente mais tarde</p>
              }
            }
          </div>
          
          <button mat-raised-button color="primary" class="login__button poppins-regular" [disabled]="isLoading">
            @if(isLoading) {
              <mat-spinner diameter="20"></mat-spinner>
            } @else {
              Entrar
            }
          </button>
          
          <div class="login__footer">
            <span class="poppins-regular">Não tem uma conta?</span>
            <a mat-button color="primary" routerLink="/register">Registre-se</a>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .login {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #FAF5FF;
      padding: 1rem;
    }

    .login__container {
      width: 100%;
      max-width: 450px;
    }

    .login__form {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .login__title {
      text-align: center;
      margin-bottom: 1rem;
    }

    .login__title h1 {
      font-size: 1.75rem;
      color: #4A148C;
      margin-bottom: 0.5rem;
    }

    .login__title p {
      color: #718096;
      margin: 0;
    }

    .login__fields {
      width: 100%;
    }

    .login__alert-message {
      color: #d32f2f;
      text-align: center;
      min-height: 1.5rem;
    }

    .login__button {
      width: 100%;
      height: 48px;
      font-size: 1rem;
      background-color: #7E57C2;
    }

    .login__footer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      color: #718096;
    }

    /* Font classes */
    .poppins-semibold {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
    }

    .poppins-regular {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }

    .poppins-light {
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
    }

    /* Responsividade */
    @media (max-width: 600px) {
      .login__form {
        padding: 1.5rem;
      }
    }
  `]
})
export class LoginComponent {
  isLoading = false;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  private readonly router = inject(Router);
  private readonly loginService = inject(LoginService);
  private readonly snackBar = inject(MatSnackBar);

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const username = this.loginForm.value.username ?? '';
    const password = this.loginForm.value.password ?? '';

    this.loginService.login(username, password)
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          this.snackBar.open('Login realizado com sucesso!', 'Fechar', {
            duration: 3000,
            panelClass: 'success-snackbar'
          });
          this.router.navigate(['/home']);
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;
          console.error('Login error:', error);

          if (error.status === 401 || error.status === 403) {
            this.loginForm.setErrors({ 'invalidCredentials': true });
            this.snackBar.open('Credenciais inválidas', 'Fechar', {
              duration: 3000,
              panelClass: 'error-snackbar'
            });
          } else {
            this.loginForm.setErrors({ 'generalCredentialsError': true });
            this.snackBar.open('Erro no servidor. Tente novamente mais tarde.', 'Fechar', {
              duration: 3000,
              panelClass: 'error-snackbar'
            });
          }
        }
      });
  }
}