// src/app/pages/register/register.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RegisterService } from '../services/RegisterService';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
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
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="register">
      <div class="register__container">
        <form class="register__form" [formGroup]="registerForm" (ngSubmit)="onRegister()">
          <div class="register__title">
            <h1 class="poppins-semibold">Criar Nova Conta</h1>
            <p class="poppins-light">Preencha os campos para se registrar no sistema</p>
          </div>
          
          <div class="register__row">
            <div class="register__fields">
              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Nome</mat-label>
                <input matInput formControlName="name" required>
                <mat-icon matPrefix>person</mat-icon>
                @if (registerForm.get('name')?.invalid && registerForm.get('name')?.touched) {
                  <mat-error>Campo obrigatório</mat-error>
                }
              </mat-form-field>
            </div>
            
            <div class="register__fields">
              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Email</mat-label>
                <input matInput formControlName="email" type="email" required>
                <mat-icon matPrefix>email</mat-icon>
                @if (registerForm.get('email')?.invalid && registerForm.get('email')?.touched) {
                  <mat-error>Email inválido</mat-error>
                }
              </mat-form-field>
            </div>
          </div>
          
          <div class="register__row">
            <div class="register__fields">
              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Usuário</mat-label>
                <input matInput formControlName="username" required>
                <mat-icon matPrefix>badge</mat-icon>
                @if (registerForm.get('username')?.invalid && registerForm.get('username')?.touched) {
                  <mat-error>Campo obrigatório</mat-error>
                }
              </mat-form-field>
            </div>
            
            <div class="register__fields">
              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Tipo de Usuário</mat-label>
                <mat-select formControlName="role" required>
                  <mat-option *ngFor="let role of roles" [value]="role.id">
                    {{ role.nome }}
                  </mat-option>
                </mat-select>
                <mat-icon matPrefix>group</mat-icon>
              </mat-form-field>
            </div>
          </div>
          
          <div class="register__row">
            <div class="register__fields">
              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Senha</mat-label>
                <input matInput formControlName="password" type="password" required>
                <mat-icon matPrefix>lock</mat-icon>
                <mat-hint>Mínimo de 6 caracteres</mat-hint>
                @if (registerForm.get('password')?.invalid && registerForm.get('password')?.touched) {
                  <mat-error>Senha muito curta</mat-error>
                }
              </mat-form-field>
            </div>
            
            <div class="register__fields">
              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Confirmar Senha</mat-label>
                <input matInput formControlName="confirmPassword" type="password" required>
                <mat-icon matPrefix>lock_reset</mat-icon>
                @if (registerForm.hasError('mismatch') && registerForm.get('confirmPassword')?.touched) {
                  <mat-error>Senhas não coincidem</mat-error>
                }
              </mat-form-field>
            </div>
          </div>
          
          <div class="register__alert-message">
            @if(registerForm.invalid && registerForm.touched) {
              @if(registerForm.hasError('required')) {
                <p class="poppins-semibold">Preencha todos os campos</p>
              }
              @if(registerForm.hasError('mismatch')) {
                <p class="poppins-semibold">As senhas não coincidem</p>
              }
              @if(registerForm.hasError('serverError')) {
                <p class="poppins-semibold">Erro no servidor. Tente novamente mais tarde.</p>
              }
            }
          </div>
          
          <div class="register__buttons-container">
            <button 
              mat-raised-button 
              color="primary" 
              class="poppins-regular register__send-button" 
              type="submit"
              [disabled]="isLoading || registerForm.invalid"
            >
              @if(isLoading) {
                <mat-spinner diameter="20"></mat-spinner>
              } @else {
                Criar Usuário
              }
            </button>
            
            <button 
              mat-stroked-button 
              type="button" 
              class="poppins-regular register__send-button register__send-button--secondary"
              routerLink="/login"
            >
              Já tenho uma conta
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .register {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #FAF5FF;
      padding: 1rem;
    }

    .register__container {
      width: 100%;
      max-width: 800px;
    }

    .register__form {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .register__title {
      text-align: center;
      margin-bottom: 1rem;
    }

    .register__title h1 {
      font-size: 1.75rem;
      color: #4A148C;
      margin-bottom: 0.5rem;
    }

    .register__title p {
      color: #718096;
      margin: 0;
    }

    .register__row {
      display: flex;
      gap: 1rem;
      width: 100%;
    }

    .register__fields {
      flex: 1;
      width: 100%;
    }

    .register__alert-message {
      color: #d32f2f;
      text-align: center;
      min-height: 1.5rem;
    }

    .register__buttons-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }

    .register__send-button {
      width: 100%;
      height: 48px;
      font-size: 1rem;
    }

    .register__send-button--secondary {
      border-color: #B39DDB;
      color: #4A148C;
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
    @media (max-width: 768px) {
      .register__row {
        flex-direction: column;
        gap: 1rem;
      }
      
      .register__form {
        padding: 1.5rem;
      }
    }
  `]
})
export class RegisterComponent {
  isLoading = false;
  roles = [
    { id: 1, nome: 'Admin' },
    { id: 2, nome: 'User' }
  ];

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])
  }, { validators: this.passwordMatchValidator });

  private readonly router = inject(Router);
  private readonly registerService = inject(RegisterService);
  private readonly snackBar = inject(MatSnackBar);

  passwordMatchValidator(control: import("@angular/forms").AbstractControl) {
    const formGroup = control as FormGroup;
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const { name, email, username, password, role } = this.registerForm.value;

    this.registerService.register({
      name: name ?? '',
      email: email ?? '',
      username: username ?? '',
      password: password ?? '',
      roleId: Number(role) ?? 2
    }).subscribe({
      next: () => {
        this.snackBar.open('Registro realizado com sucesso!', 'Fechar', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        this.router.navigate(['/login']);
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;
        console.error('Registration error:', error);

        if (error.status === 400 || error.status === 409) {
          this.registerForm.setErrors({ 'duplicate': true });
          this.snackBar.open('Email ou usuário já cadastrado', 'Fechar', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        } else {
          this.registerForm.setErrors({ 'serverError': true });
          this.snackBar.open('Erro no servidor. Tente novamente mais tarde.', 'Fechar', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}