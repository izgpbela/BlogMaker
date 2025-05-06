import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
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
    MatIconModule,
    MatMenuModule
  ],
  template: `
    <mat-toolbar class="bg-primary-700 text-primary-50 shadow-md px-4 py-3">
      <span class="text-xl font-bold">Blog Maker</span>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-4 ml-auto text-xl font-medium">
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

      <!-- Mobile Menu Button -->
      <button mat-icon-button class="md:hidden ml-auto" (click)="toggleMobileMenu()">
        <mat-icon>{{ mobileMenuOpen ? 'close' : 'menu' }}</mat-icon>
      </button>

      <!-- Mobile Menu - Purple themed -->
      <div class="md:hidden absolute top-16 left-0 right-0 bg-primary-700 shadow-lg z-10 transition-all duration-300"
           [class.hidden]="!mobileMenuOpen">
        <div class="flex flex-col space-y-1 p-2">
          <a mat-button routerLink="/home" routerLinkActive="active" 
             class="w-full text-left py-3 px-4 hover:bg-primary-600 hover:text-white transition-colors duration-300 rounded-none"
             (click)="mobileMenuOpen = false">
            Home
          </a>
          <a mat-button routerLink="/themes" routerLinkActive="active"
             class="w-full text-left py-3 px-4 hover:bg-primary-600 hover:text-white transition-colors duration-300 rounded-none"
             (click)="mobileMenuOpen = false">
            Themes
          </a>
          <button mat-button routerLink="/create-post" routerLinkActive="active"
             class="w-full text-left py-3 px-4 hover:bg-primary-600 hover:text-white transition-colors duration-300 rounded-none"
             (click)="openPostForm(); mobileMenuOpen = false">
            New Post
          </button>
          <a mat-button routerLink="/analytics" routerLinkActive="active"
             class="w-full text-left py-3 px-4 hover:bg-primary-600 hover:text-white transition-colors duration-300 rounded-none"
             (click)="mobileMenuOpen = false">
            Analytics
          </a>
          <div class="border-t border-primary-600 pt-1">
            <a mat-button routerLink="/login" routerLinkActive="active"
               class="w-full text-left py-3 px-4 hover:bg-primary-600 hover:text-white transition-colors duration-300 rounded-none"
               (click)="mobileMenuOpen = false">
              Login
            </a>
            <a mat-button routerLink="/register" routerLinkActive="active"
               class="w-full text-left py-3 px-4 hover:bg-primary-600 hover:text-white transition-colors duration-300 rounded-none"
               (click)="mobileMenuOpen = false">
              Register
            </a>
          </div>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .active {
      @apply bg-primary-600 text-white;
    }
    @media (max-width: 767px) {
      .active {
        @apply bg-primary-600 text-white;
      }
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