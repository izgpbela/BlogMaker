// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
  ],
  template: `
    <div class="login-container">
      <mat-card class="login-card">
        <mat-card-header class="login-header">
          <h1 class="login-title">Login</h1>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="loginForm" class="login-form">
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Email</mat-label>
              <input matInput formControlName="email" type="email" required>
              <mat-icon matPrefix>email</mat-icon>
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-full mt-4">
              <mat-label>Password</mat-label>
              <input matInput formControlName="password" type="password" required>
              <mat-icon matPrefix>lock</mat-icon>
            </mat-form-field>

            <div class="login-actions">
              <button mat-stroked-button type="button" routerLink="/" class="cancel-button">
                Cancel
              </button>
              <button mat-raised-button color="primary" type="submit" class="submit-button">
                Sign In
              </button>
            </div>
          </form>
        </mat-card-content>

        <mat-card-actions class="login-footer">
          <span>Don't have an account?</span>
          <a mat-button color="primary" routerLink="/register">Register</a>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .login-container {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #FAF5FF;
      padding: 1rem;
    }

    .login-card {
      width: 100%;
      max-width: 450px;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .login-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .login-title {
      font-size: 1.75rem;
      font-weight: 600;
      color: #4A148C;
      font-family: 'Cascadia Mono', monospace;
    }

    .login-form {
      display: flex;
      flex-direction: column;
    }

    .login-actions {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      gap: 1rem;
    }

    .cancel-button {
      flex: 1;
      border-color: #B39DDB;
      color: #4A148C;
    }

    .submit-button {
      flex: 1;
      background-color: #7E57C2;
      color: white;
    }

    .login-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1.5rem;
      color: #718096;
    }

    /* Responsividade */
    @media (max-width: 600px) {
      .login-card {
        padding: 1.5rem;
      }
      
      .login-actions {
        flex-direction: column;
      }
    }
  `]
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
}