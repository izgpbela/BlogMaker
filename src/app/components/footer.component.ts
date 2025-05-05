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
    <footer class="bg-gray-800 text-white mt-auto">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Logo e slogan -->
          <div class="mb-6 md:mb-0 text-center md:text-left">
            <h2 class="text-xl font-bold mb-2">Blog Maker</h2>
            <p class="text-gray-400">A platform for sharing knowledge, ideas, and stories.</p>
          </div>

          <!-- Links -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div class="flex flex-col">
              <a routerLink="/" class="mb-2 hover:text-primary transition-colors">Home</a>
              <a routerLink="/themes" class="mb-2 hover:text-primary transition-colors">Themes</a>
              <a routerLink="/analytics" class="hover:text-primary transition-colors">Analytics</a>
            </div>
            <div class="flex flex-col">
              <a routerLink="/join" class="mb-2 hover:text-primary transition-colors">Join Us</a>
              <a routerLink="/terms" class="mb-2 hover:text-primary transition-colors">Terms of Service</a>
              <a routerLink="/privacy" class="hover:text-primary transition-colors">Privacy Policy</a>
            </div>
            <div class="flex flex-col">
              <a routerLink="/cookie-policy" class="mb-2 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          &copy; 2025 Blog Maker. All rights reserved.
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
    .hover-text-primary:hover {
      color: #3f51b5;
    }
  `]
})
export class FooterComponent {}