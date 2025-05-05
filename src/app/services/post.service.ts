import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';
=======
import { Post } from '../models/post.model';
>>>>>>> 53478f649f281b03e87fcf4290bcb8a8eeef2331

@Injectable({
  providedIn: 'root'
})
export class PostService {
<<<<<<< HEAD
  private apiUrl = 'https://projeto-blog-pessoal-l27j.onrender.com/api/postagens'; 
=======
  private apiUrl = 'http://localhost:3000/posts'; // Adjust backend URL as needed
>>>>>>> 53478f649f281b03e87fcf4290bcb8a8eeef2331

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
<<<<<<< HEAD
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
=======
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
>>>>>>> 53478f649f281b03e87fcf4290bcb8a8eeef2331
