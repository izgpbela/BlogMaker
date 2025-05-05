import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostFormService {
  private posts: Post[] = [];

  constructor() {}

  addPost(post: Post): void {
    this.posts.push(post);
  }

  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number | string): Post | undefined {
    return this.posts.find(post => post.id === id);
  }

  updatePost(updatedPost: Post): void {
    const index = this.posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = updatedPost;
    }
  }

  deletePost(id: number | string): void {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
