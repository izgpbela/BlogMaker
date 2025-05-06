// src/app/pages/themes/themes.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ThemeCardComponent } from '../components/theme.card.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ThemeCardComponent,
    MatIconModule
  ],
  template: `
    <div class="themes-container">
      <div class="header-section">
        <h2 class="section-title">Explore Themes</h2>
        <p class="section-description">
          Discover content organized by themes. Each theme contains posts about specific topics.
        </p>
      </div>
      
      <div class="themes-grid">
        <app-theme-card 
          title="Technology" 
          description="Articles about the latest in tech" 
          postCount="12"
          icon="code">
        </app-theme-card>
        
        <app-theme-card 
          title="Web Development" 
          description="Everything about web development" 
          postCount="15"
          icon="web">
        </app-theme-card>
        
        <app-theme-card 
          title="Mobile Development" 
          description="iOS, Android and cross-platform development" 
          postCount="8"
          icon="phone_iphone">
        </app-theme-card>
        
        <app-theme-card 
          title="UX/UI Design" 
          description="Design principles and practices" 
          postCount="5"
          icon="palette">
        </app-theme-card>
      </div>
    </div>
  `,
  
})
export class ThemesComponent {}