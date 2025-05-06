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
        <div class="flex flex-col lg:flex-row justify-between items-start">
          <!-- Logo e slogan -->
          <div class="mb-8 lg:mb-0 text-center lg:text-left w-full lg:w-auto">
            <h2 class="text-xl font-bold mb-2">Blog Maker</h2>
            <p class="text-primary-200 max-w-md mx-auto lg:mx-0">
              Uma plataforma para compartilhar conhecimento, ideias e histórias.
            </p>
          </div>

          <!-- Links - Mobile optimized -->
          <div class="w-full lg:w-auto">
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              <div class="flex flex-col">
                <h3 class="font-semibold mb-3 text-primary-100">Navigation</h3>
                <a routerLink="/home" class="mb-2 hover:text-secondary-300 transition-colors duration-300">Home</a>
                <a routerLink="/themes" class="mb-2 hover:text-secondary-300 transition-colors duration-300">Themes</a>
                <a routerLink="/analytics" class="hover:text-secondary-300 transition-colors duration-300">Analytics</a>
              </div>
              <div class="flex flex-col">
                <h3 class="font-semibold mb-3 text-primary-100">Legal</h3>
                <a routerLink="/join" class="mb-2 hover:text-secondary-300 transition-colors duration-300">Join Us</a>
                <a routerLink="/terms" class="mb-2 hover:text-secondary-300 transition-colors duration-300">Terms</a>
                <a routerLink="/privacy" class="hover:text-secondary-300 transition-colors duration-300">Privacy</a>
              </div>
              <div class="flex flex-col">
                <h3 class="font-semibold mb-3 text-primary-100">More</h3>
                <a routerLink="/cookie-policy" class="mb-2 hover:text-secondary-300 transition-colors duration-300">Cookies</a>
                <a routerLink="/contact" class="mb-2 hover:text-secondary-300 transition-colors duration-300">Contact</a>
                <a routerLink="/faq" class="hover:text-secondary-300 transition-colors duration-300">FAQ</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-primary-700 mt-8 pt-6 text-center text-primary-300 text-sm sm:text-base">
          &copy; {{ currentYear }} Blog Maker. All rights reserved.
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}