// src/app/pages/register/register.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

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
    RouterLink
  ],
  template: `
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <mat-card class="w-full max-w-md p-8">
        <mat-card-header class="mb-6">
          <mat-card-title class="text-2xl font-bold">Create an account</mat-card-title>
          <mat-card-subtitle>Enter your information to create your account</mat-card-subtitle>
        </mat-card-header>
        
        <mat-card-content>
          <form [formGroup]="registerForm" class="flex flex-col gap-4">
            <mat-form-field appearance="outline">
              <mat-label>Name</mat-label>
              <input matInput formControlName="name" placeholder="Your name">
            </mat-form-field>
            
            <mat-form-field appearance="outline">
              <mat-label>Email</mat-label>
              <input matInput formControlName="email" placeholder="name@example.com" type="email">
            </mat-form-field>
            
            <mat-form-field appearance="outline">
              <mat-label>Password</mat-label>
              <input matInput formControlName="password" type="password">
            </mat-form-field>
            
            <mat-form-field appearance="outline">
              <mat-label>Confirm Password</mat-label>
              <input matInput formControlName="confirmPassword" type="password">
            </mat-form-field>
            
            <button mat-raised-button color="primary" class="mt-4" type="submit">Create account</button>
          </form>
        </mat-card-content>
        
        <mat-card-actions class="flex justify-center mt-4">
          <span class="text-sm">Already have an account? </span>
          <a mat-button color="primary" routerLink="/login">Sign in</a>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: []
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  });
}