// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

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
    RouterLink
  ],
  template: `
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <mat-card class="w-full max-w-md p-8">
        <mat-card-header class="mb-6">
          <mat-card-title class="text-2xl font-bold">Sign in</mat-card-title>
          <mat-card-subtitle>Enter your email and password to access your account.</mat-card-subtitle>
        </mat-card-header>
        
        <mat-card-content>
          <form [formGroup]="loginForm" class="flex flex-col gap-4">
            <mat-form-field appearance="outline">
              <mat-label>Email</mat-label>
              <input matInput formControlName="email" placeholder="name@example.com" type="email">
            </mat-form-field>
            
            <mat-form-field appearance="outline">
              <mat-label>Password</mat-label>
              <input matInput formControlName="password" type="password">
              <mat-hint class="text-right">
                <a href="#" class="text-sm text-primary">Forgot password?</a>
              </mat-hint>
            </mat-form-field>
            
            <div class="bg-gray-100 p-3 rounded-md text-sm">
              <strong>Demo credentials:</strong> pereiraizabela21&#64;gmail.com / 12345678
            </div>
            
            <button mat-raised-button color="primary" class="mt-4" type="submit">Sign in</button>
          </form>
        </mat-card-content>
        
        <mat-card-actions class="flex justify-center mt-4">
          <span class="text-sm">Don't have an account? </span>
          <a mat-button color="primary" routerLink="/register">Sign up</a>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: []
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
}