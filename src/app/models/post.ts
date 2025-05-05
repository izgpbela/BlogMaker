// src/app/models/post.model.ts
export interface Post {
  id: string;
  theme: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}