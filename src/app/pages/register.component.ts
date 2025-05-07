// src/app/pages/register/register.component.ts
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
    MatIconModule
  ],
  template: `
    <div class="register-container">
      <mat-card class="register-card">
        <mat-card-header class="register-header">
          <h1 class="register-title">Create New Account</h1>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="registerForm" class="register-form">
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Full Name</mat-label>
              <input matInput formControlName="name" required>
              <mat-icon matPrefix>person</mat-icon>
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-full mt-4">
              <mat-label>Email</mat-label>
              <input matInput formControlName="email" type="email" required>
              <mat-icon matPrefix>email</mat-icon>
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-full mt-4">
              <mat-label>Password</mat-label>
              <input matInput formControlName="password" type="password" required>
              <mat-icon matPrefix>lock</mat-icon>
              <mat-hint>At least 6 characters</mat-hint>
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-full mt-4">
              <mat-label>Confirm Password</mat-label>
              <input matInput formControlName="confirmPassword" type="password" required>
              <mat-icon matPrefix>lock_reset</mat-icon>
            </mat-form-field>

            <div class="register-actions">
              <button mat-stroked-button type="button" routerLink="/" class="cancel-button">
                Cancel
              </button>
              <button mat-raised-button color="primary" type="submit" class="submit-button" 
                      [disabled]="registerForm.invalid">
                Register
              </button>
            </div>
          </form>
        </mat-card-content>

        <mat-card-actions class="register-footer">
          <span>Already have an account?</span>
          <a mat-button color="primary" routerLink="/login">Sign In</a>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .register-container {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #FAF5FF;
      padding: 1rem;
    }

    .register-card {
      width: 100%;
      max-width: 450px;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .register-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .register-title {
      font-size: 1.75rem;
      font-weight: 600;
      color: #4A148C;
      font-family: 'Cascadia Mono', monospace;
    }

    .register-form {
      display: flex;
      flex-direction: column;
    }

    .register-actions {
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

    .register-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1.5rem;
      color: #718096;
    }

    /* Responsividade */
    @media (max-width: 600px) {
      .register-card {
        padding: 1.5rem;
      }
      
      .register-actions {
        flex-direction: column;
      }
    }
  `]
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  }, { validators: this.passwordMatchValidator });

  passwordMatchValidator(control: import("@angular/forms").AbstractControl) {
    const formGroup = control as FormGroup;
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
}
