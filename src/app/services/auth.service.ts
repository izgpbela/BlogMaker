// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticated.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  login(credentials: { email: string; password: string }) {
    // Implement your login logic here
    this.isAuthenticated.next(true);
    this.router.navigate(['/themes']);
    this.snackBar.open('Login successful', 'Close', { duration: 3000 });
  }

  register(user: { name: string; email: string; password: string }) {
    // Implement your registration logic here
    this.router.navigate(['/login']);
    this.snackBar.open('Registration successful! Please login.', 'Close', { duration: 3000 });
  }

  logout() {
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }
}