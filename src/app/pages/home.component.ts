// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { PostFormComponent } from '../components/post-form.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule],
  template: `

            <!-- Hero Section -->
      <main class="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100">
        <div class="text-center max-w-2xl px-4 py-16 sm:py-24 lg:py-32">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Welcome to Blog Maker
          </h1>
          <p class="mt-6 text-xl text-gray-600">
          Compartilhe seu conhecimento e fique atualizado com as últimas novidades em tecnologia e desenvolvimento
          </p>
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blog-primary"></div>
          <div class="mt-10 flex justify-center gap-4">
            <a mat-raised-button color="primary" routerLink="/themes" class="text-lg px-6 py-3">
              Explore Themes
            </a>
            
            <a mat-stroked-button color="primary" routerLink="/create-post" class="text-lg px-6 py-3">
            Comece a escrever
            </a>
            
          </div>
        </div>
      </main>

  `,

})
export class HomeComponent {
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}