import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'http://localhost:3000/api/posts'; // Adjust backend URL as needed

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, post);
  }

  updatePost(post: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/' + post.id, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + id);
  }
}
