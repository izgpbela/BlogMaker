// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
    <div class="min-h-screen flex flex-col">
      <!-- Header -->
      <mat-toolbar color="primary" class="shadow-md">
        <span class="text-xl font-bold">Blog Maker</span>
        
        <nav class="ml-8 hidden md:flex gap-4">
          <a mat-button routerLink="/" routerLinkActive="active">Home</a>
          <a mat-button routerLink="/themes" routerLinkActive="active">Themes</a>
          <a mat-button routerLink="/analytics" routerLinkActive="active">Analytics</a>
          <a mat-button routerLink="/login" routerLinkActive="active">Login</a>
          <a mat-button routerLink="/resigno" routerLinkActive="active">Resigno</a>
        </nav>

        <button mat-icon-button 
        class="!bg-primary-500 hover:!bg-primary-600 !text-white"
        (click)="toggleMobileMenu()">
        <mat-icon>menu</mat-icon>
        </button>
      </mat-toolbar>

      <!-- Mobile Menu -->
      <div class="md:hidden bg-gray-100" *ngIf="mobileMenuOpen">
        <div class="flex flex-col p-4 gap-2">
          <a mat-button routerLink="/" routerLinkActive="active" (click)="mobileMenuOpen = false">Home</a>
          <a mat-button routerLink="/themes" routerLinkActive="active" (click)="mobileMenuOpen = false">Themes</a>
          <a mat-button routerLink="/analytics" routerLinkActive="active" (click)="mobileMenuOpen = false">Analytics</a>
          <a mat-button routerLink="/login" routerLinkActive="active" (click)="mobileMenuOpen = false">Login</a>
          <a mat-button routerLink="/resigno" routerLinkActive="active" (click)="mobileMenuOpen = false">Resigno</a>
        </div>
      </div>

      <!-- Hero Section -->
      <main class="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100">
        <div class="text-center max-w-2xl px-4 py-16 sm:py-24 lg:py-32">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Welcome to BlogScribe
          </h1>
          <p class="mt-6 text-xl text-gray-600">
            Share your knowledge and stay updated with the latest in technology and development
          </p>
          <div class="mt-10 flex justify-center gap-4">
            <a mat-raised-button color="primary" routerLink="/themes" class="text-lg px-6 py-3">
              Explore Themes
            </a>
            <a mat-stroked-button routerLink="/login" class="text-lg px-6 py-3">
              Start Writing
            </a>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4 text-center">
          <p>&copy; 2025 Blog Maker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .active {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }
  `]
})
export class HomeComponent {
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}