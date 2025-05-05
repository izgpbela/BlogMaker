import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';
import { environment } from '../environments/environment.prod';  // Import the environment file


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'https://projeto-blog-pessoal-l27j.onrender.com/api/postagens'; 



  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
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
