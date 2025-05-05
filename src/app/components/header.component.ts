// src/app/components/header/header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <span>Blog Maker</span>
      <nav class="flex gap-4 ml-8">
        <a mat-button routerLink="/" routerLinkActive="active">Home</a>
        <a mat-button routerLink="/themes" routerLinkActive="active">Themes</a>
        <a mat-button routerLink="/analytics" routerLinkActive="active">Analytics</a>
        <a mat-button routerLink="/login" routerLinkActive="active">Login</a>
        <a mat-button routerLink="/register" routerLinkActive="active">Register</a>
      </nav>
    </mat-toolbar>
  `,
  styles: [`
    .active {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }
  `]
})
export class HeaderComponent {}