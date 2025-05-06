// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule],
  template: `
    <footer class="bg-primary-900 text-primary-50 mt-auto">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Logo e slogan -->
          <div class="mb-6 md:mb-0 text-center md:text-left">
            <h2 class="text-xl font-bold mb-2">Blog Maker</h2>
            <p class="text-primary-200">Uma plataforma para compartilhar conhecimento, ideias e histórias.</p>
          </div>

          <!-- Links -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div class="flex flex-col">
              <a routerLink="/home" class="mb-2 hover:text-secondary-300 transition-colors duration-300">Home</a>
              <a routerLink="/themes" class="mb-2 hover:text-secondary-300 transition-colors duration-300">Themes</a>
              <a routerLink="/analytics" class="hover:text-secondary-300 transition-colors duration-300">Analytics</a>
            </div>
            <div class="flex flex-col">
              <a routerLink="/join" class="mb-2 hover:text-secondary-300 transition-colors duration-300">Join Us</a>
              <a routerLink="/terms" class="mb-2 hover:text-secondary-300 transition-colors duration-300">Terms of Service</a>
              <a routerLink="/privacy" class="hover:text-secondary-300 transition-colors duration-300">Privacy Policy</a>
            </div>
            <div class="flex flex-col">
              <a routerLink="/cookie-policy" class="mb-2 hover:text-secondary-300 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-primary-700 mt-8 pt-6 text-center text-primary-300">
          &copy; 2025 Blog Maker. All rights reserved.
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}