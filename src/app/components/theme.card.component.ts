// src/app/components/theme-card/theme-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-theme-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
    <mat-card class="theme-card">
      <mat-card-header>
        <mat-card-title class="text-xl font-bold">{{ title }}</mat-card-title>
      </mat-card-header>
      
      <mat-card-content>
        <p class="text-gray-600 mb-4">{{ description }}</p>
        
        <div class="posts-count mb-4">
          <span class="font-medium">{{ posts.length }} Posts</span>
        </div>
        
        <div class="posts-list space-y-4">
          <div *ngFor="let post of posts" class="post-item border-b pb-4">
            <h3 class="font-bold text-lg">{{ post.title }}</h3>
            <p class="text-gray-600 text-sm">{{ post.summary }}</p>
            <div class="post-meta text-xs text-gray-500 mt-2">
              <span>{{ post.author }}</span>
              <span class="mx-2">•</span>
              <span>{{ post.date }}</span>
            </div>
          </div>
        </div>
      </mat-card-content>
      
      <mat-card-actions>
        <button mat-button color="primary" [routerLink]="['/theme', title.toLowerCase()]">
          VIEW ALL POSTS
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .theme-card {
      @apply h-full flex flex-col;
      min-height: 400px;
    }
    mat-card-content {
      @apply flex-grow;
    }
  `]
})
export class ThemeCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() posts: any[] = [];

  // Exemplo de dados que seriam recebidos do serviço
  webDevPosts = [
    {
      title: 'React vs Angular: A Developer\'s Perspective',
      summary: 'Comparing React and Angular from different angles to help you choose the right tool.',
      author: 'John Doe',
      date: 'May 17, 2023'
    },
    {
      title: 'Understanding CSS Grid',
      summary: 'Learn how to use CSS Grid to create complex layouts with ease.',
      author: 'Maria Silva',
      date: 'April 19, 2023'
    },
    {
      title: 'Getting Started with Angular',
      summary: 'An introduction to Angular framework and how to set up your first project.',
      author: 'John Doe',
      date: 'April 14, 2023'
    }
  ];
}