import { Injectable } from '@angular/core';

interface Theme {
  id: number | string;
  name: string;
  description?: string;
}

interface Post {
  id: number | string;
  theme: Theme;
  createdAt: string;
  likes: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor() {}

  getAnalytics() {
    return {
      totalPosts: 42,
      postsByAuthor: {
        'Alice': 10,
        'Bob': 15,
        'Charlie': 17
      }
    };
  }

  getPosts(): Promise<Post[]> {
    return Promise.resolve([
      {
        id: 1,
        theme: { id: '1', name: 'Technology' },
        createdAt: '2023-06-01T00:00:00Z',
        likes: 10
      },
      {
        id: 2,
        theme: { id: '2', name: 'Science' },
        createdAt: '2023-06-02T00:00:00Z',
        likes: 5
      },
      {
        id: 3,
        theme: { id: '1', name: 'Technology' },
        createdAt: '2023-06-03T00:00:00Z',
        likes: 8
      }
    ]);
  }

  getThemes(): Promise<Theme[]> {
    return Promise.resolve([
      { id: '1', name: 'Technology', description: 'Posts about technology' },
      { id: '2', name: 'Science', description: 'Posts about science' }
    ]);
  }

  getPostById(id: string): Promise<Post | null> {
    return this.getPosts().then(posts => posts.find(post => post.id.toString() === id) || null);
  }

  getPostsByTheme(themeId: string): Promise<Post[]> {
    return this.getPosts().then(posts => posts.filter(post => post.theme.id.toString() === themeId));
  }
}
