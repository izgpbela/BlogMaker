import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { environment } from '../environments/environment.prod';  // Import the environment file

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/api/postagens';

  private getHeaders(): HttpHeaders {
  const token = localStorage.getItem('token') || '';
  return new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
}

  constructor(private http: HttpClient) {}


  getPosts(): Observable<Post[]> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Post[]>(this.apiUrl + '/listar', { headers });
  }

  createPost(post: Post): Observable<Post> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Post>(this.apiUrl + '/nova', post, { headers });
  }

  updatePost(id: number, post: Post): Observable<Post> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<Post>(`${this.apiUrl}/editar/${id}`, post, { headers });
  }

  deletePost(id: number): Observable<void> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<void>(`${this.apiUrl}/excluir/${id}`, { headers });
  }

  getPostById(id: number): Observable<Post> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Post>(`${this.apiUrl}/${id}`, {headers});
  }

  getPostsByTheme(theme: string): Observable<Post[]> {
  return this.http.get<Post[]>(`${this.apiUrl}/tema/${theme}`, { headers: this.getHeaders() });
}



  getPostStatsByDate(): Observable<any[]> {
  const token = localStorage.getItem('token') || '';
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<any[]>('http://localhost:8080/api/posts/stats-by-date', { headers });
}

}
