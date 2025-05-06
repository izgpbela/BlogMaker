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
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule
  ],
  template: `
    <!-- Hero Section -->
    <main class="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 px-4">
      <div class="text-center w-full max-w-2xl py-12 md:py-16 lg:py-24">
        <!-- Typewriter Title -->
        <h1 class="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 md:mb-6">
          <span class="typewriter">
            <span class="typewriter-line">Welcome to Blog Maker</span>
          </span>
        </h1>
        
        <!-- Description Text -->
        <p class="text-lg sm:text-xl text-gray-600 px-2 sm:px-0 mt-4 md:mt-6">
          Compartilhe seu conhecimento e fique atualizado com as últimas novidades em tecnologia e desenvolvimento
        </p>
        
        <!-- Buttons -->
        <div class="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a mat-raised-button 
            color="primary" 
            routerLink="/themes" 
            class="!text-base sm:!text-lg px-5 py-2 sm:px-6 sm:py-3 hover:bg-primary-600 transition-colors">
            Explore Themes
          </a>
          
          <a mat-raised-button 
            color="primary" 
            routerLink="/create-post"   
            class="!text-base sm:!text-lg px-5 py-2 sm:px-6 sm:py-3 hover:bg-primary-600 transition-colors flex items-center justify-center gap-2" 
            (click)="openPostForm()">
            <mat-icon class="!w-5 !h-5 sm:!w-6 sm:!h-6">edit</mat-icon>
            Comece a escrever
          </a>
        </div>
      </div>
    </main>
  `,
  styles: [`
    /* Typewriter effect */
    .typewriter {
      display: inline-block;
    }
    
    .typewriter-line {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      border-right: 3px solid #7E57C2;
      width: 0;
      animation: 
        typing 1.5s steps(30, end) forwards,
        blink-caret .75s step-end infinite;
    }
    
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #7E57C2; }
    }

    /* Responsive adjustments */
    @media (max-width: 640px) {
      .typewriter-line {
        border-right-width: 2px;
        animation: 
          typing 1.2s steps(25, end) forwards,
          blink-caret .75s step-end infinite;
      }
    }
  `]
})
export class HomeComponent {
  mobileMenuOpen = false;

  openPostForm(): void {
    console.log('Post form opened');
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}