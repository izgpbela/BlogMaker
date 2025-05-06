import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';
import { environment } from '../environments/environment.prod';  // Import the environment file
import { AnalyticsComponent } from '../pages/analytics.component';
// Define the Post interface if not already defined


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'https://projeto-blog-pessoal-l27j.onrender.com/api/postagens'; 



  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const mockPosts: Post[] = [
      { id: 1, title: 'Post 1', author: 'Author A', date: '2023-01-01', theme: 'Theme A', content: 'Content of Post 1' },
      { id: 2, title: 'Post 2', author: 'Author B', date: '2023-01-02', theme: 'Theme B', content: 'Content of Post 2' },
      { id: 3, title: 'Post 3', author: 'Author A', date: '2023-01-03', theme: 'Theme A', content: 'Content of Post 3' },
      { id: 4, title: 'Post 4', author: 'Author C', date: '2023-01-04', theme: 'Theme C', content: 'Content of Post 4' },
      { id: 5, title: 'Post 5', author: 'Author B', date: '2023-01-05', theme: 'Theme B', content: 'Content of Post 5' }
    ];
    return new Observable<Post[]>(observer => {
      observer.next(mockPosts);
      observer.complete();
    });
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<void> {
      const token = localStorage.getItem('token') || '';
    
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }

  getPostById(id: number): Observable<Post> {
    const token = localStorage.getItem('token') || '';
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Post>(`${this.apiUrl}/${id}`, {headers});
  }
}
