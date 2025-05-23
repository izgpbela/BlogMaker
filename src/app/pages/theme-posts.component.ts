// src/app/pages/theme-posts/theme-posts.component.ts
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-posts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-4">Posts sobre {{ themeName | titlecase }}</h2>
      <div *ngFor="let post of filteredPosts" class="mb-6 border-b pb-4">
        <h3 class="text-xl font-semibold">
          <a [routerLink]="['/post', post.id]" class="text-purple-700 hover:underline">{{ post.title }}</a>
        </h3>
        <p class="text-gray-600">{{ post.summary || (post.conteudo | slice:0:120) + '...' }}</p>
        <p class="text-sm text-gray-500">Autor: {{ post.autor }} • {{ post.dataCriacao | date }}</p>
      </div>
    </div>
  `
})
export class ThemePostsComponent {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);
  

  themeName: string = '';
  filteredPosts: any[] = [];

  constructor() {
    this.route.params.subscribe(params => {
      this.themeName = params['theme'];

      this.postService.getPosts().subscribe(posts => {
        this.filteredPosts = posts.filter(
          post => post.tema?.toLowerCase() === this.themeName.toLowerCase()
        );
      });
    });
  }
}
