import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Tema } from '../enum/tema.enum';


@Component({
  selector: 'app-theme-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
    <mat-card class="theme-card">
      <mat-card-header>
        <mat-card-title class="text-xl font-bold text-purple-800">{{ title }}</mat-card-title>
      </mat-card-header>

      <mat-card-content>
        <p class="text-gray-600 mb-4">{{ description }}</p>

        <div class="posts-count mb-4">
          <span class="font-medium">{{ posts.length }} Posts</span>
        </div>

        <div *ngIf="posts.length === 0" class="text-gray-400 italic text-sm">
          Nenhuma postagem disponível neste tema.
        </div>

        <div class="posts-list space-y-4" *ngIf="posts.length > 0">
          <div *ngFor="let post of posts" class="post-item border-b pb-4">
            <h3 class="font-bold text-lg">
              <a [routerLink]="['/post', post.id]" class="text-blue-600 hover:underline">
                {{ post.titulo }}
              </a>
            </h3>
            <p class="text-gray-600 text-sm">
              {{ post.conteudo | slice: 0:100 }}...
            </p>
            <div class="post-meta text-xs text-gray-500 mt-2">
              <span>{{ post.autor }}</span>
              <span class="mx-2">•</span>
              <span>{{ post.dataCriacao | date:'dd/MM/yyyy' }}</span>
            </div>
          </div>
        </div>
      </mat-card-content>

      <mat-card-actions>
        <button mat-button color="primary" [routerLink]="['/theme', themeKey]">
          VIEW ALL POSTS
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .theme-card {
      @apply h-full flex flex-col shadow-lg rounded-2xl overflow-hidden border border-gray-200;
    }
    mat-card-content {
      @apply flex-grow;
    }
    mat-card-header {
      @apply bg-purple-100 p-4;
    }
    mat-card-title {
      @apply text-purple-800;
    }
    mat-card-actions {
      @apply mt-auto;
    }
  `]
})
export class ThemeCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() themeKey: string = ''; // <- usado para criar rota amigável
  @Input() posts: any[] = [];
}