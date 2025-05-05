// src/app/pages/themes/themes.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ThemeCardComponent } from '../components/theme.card.component';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, ThemeCardComponent],
  template: `
    <div class="max-w-6xl mx-auto p-4">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold">Blog Maker</h1>
        <div class="flex gap-4">
          <button mat-button routerLink="/">Home</button>
          <button mat-button routerLink="/themes" color="primary">Themes</button>
          <button mat-button routerLink="/analytics">Analytics</button>
          <button mat-button routerLink="/login">Login</button>
          <button mat-button routerLink="/inspirator">Inspirator</button>
        </div>
      </div>
      
      <h2 class="text-xl font-bold mb-4">Explore Themes</h2>
      <p class="text-gray-600 mb-8">Discover content organized by themes. Each theme contains posts about specific topics.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <app-theme-card 
          title="Technology" 
          description="Articles about the latest in tech" 
          postCount="12">
        </app-theme-card>
        
        <app-theme-card 
          title="Mobile Development" 
          description="iOS, Android and cross-platform development" 
          postCount="8">
        </app-theme-card>
        
        <app-theme-card 
          title="Web Development" 
          description="Everything about web development" 
          postCount="15">
        </app-theme-card>
        
        <app-theme-card 
          title="UX/UI Design" 
          description="Design principles and practices" 
          postCount="5">
        </app-theme-card>
      </div>
    </div>
  `,
  styles: []
})
export class ThemesComponent {}