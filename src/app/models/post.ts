// src/app/models/post.model.ts
export interface Post {
    id: number; // Use number for ID
    theme: string;
    title: string;
    content: string;
    author: string;
    date: string; // Format: YYYY-MM-DD
  }