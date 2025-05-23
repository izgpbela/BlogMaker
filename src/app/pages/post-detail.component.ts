// src/app/pages/post-detail/post-detail.component.ts
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="post" class="p-6 max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">{{ post.titulo }}</h1>
      <p class="text-sm text-gray-500 mb-2">
        Por {{ post.autor }} • {{ post.dataCriacao | date:'longDate' }}
      </p>
      <div class="text-base text-gray-800 leading-relaxed whitespace-pre-line">
        {{ post.conteudo }}
      </div>
    </div>
  `
})
export class PostDetailComponent {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);

  post: any;

  constructor() {
    const postId = Number(this.route.snapshot.params['id']);
    this.postService.getPostById(postId).subscribe(post => this.post = post);
  }
}
