// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './app/components/header.component';
import { FooterComponent } from './app/components/footer.component';
import { HomeComponent } from './app/pages/home.component';
import { PostFormComponent } from './app/components/post-form.component';
import { AnalyticsComponent } from './app/pages/analytics.component';
import { ThemesComponent } from './app/pages/themes.component';
import { LoginComponent } from './app/pages/login.component';
import { RegisterComponent } from './app/pages/register.component';
import { CreatePostComponent } from './app/pages/create-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <main class="min-h-screen">
      <router-outlet />
    </main>
    <div class="flex flex-col min-h-screen">
      <app-header />
      <main class="flex-grow">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: []

})
export class AppComponent {
  title = 'Blog Maker';
}