// src/app/components/header/header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { PostFormComponent } from '../components/post-form.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <mat-toolbar class="bg-primary-700 text-primary-50 shadow-md px-4 py-3">
      <span class="text-xl font-bold">Blog Maker</span>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex gap-4 ml-auto">
        <a mat-button routerLink="/home" routerLinkActive="active" 
           class="hover:bg-primary-600 hover:text-white transition-colors duration-300">
          Home
        </a>
        <a mat-button routerLink="/themes" routerLinkActive="active"
           class="hover:bg-primary-600 hover:text-white transition-colors duration-300">
          Themes
        
        </a>
        <button mat-button routerLink="/create-post" routerLinkActive="active"
           class="hover:bg-primary-600 hover:text-white transition-colors duration-300"
           (click)="openPostForm()">
          New Post
        </button>
        <a mat-button routerLink="/analytics" routerLinkActive="active"
           class="hover:bg-primary-600 hover:text-white transition-colors duration-300">
          Analytics
        </a>
        <a mat-button routerLink="/login" routerLinkActive="active"
           class="hover:bg-primary-600 hover:text-white transition-colors duration-300">
          Login
        </a>
        <a mat-button routerLink="/register" routerLinkActive="active"
           class="hover:bg-primary-600 hover:text-white transition-colors duration-300">
          Register
        </a>
      </nav>

  `,
  styles: [`
    .active {
      @apply bg-primary-600 text-white font-medium;
    }
  `]
})
export class HeaderComponent {
  mobileMenuOpen = false;

  constructor(private dialog: MatDialog) {}

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  openPostForm(): void {
    this.dialog.open(PostFormComponent, {
      width: '600px',
      maxWidth: '90vw',
      panelClass: 'dialog-container'
    });
  }
}