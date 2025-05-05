import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'https://projeto-blog-pessoal-l27j.onrender.com/api/usuarios';

  constructor(private http: HttpClient) {}


  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, {
      usuario: email,
      senha: password
    }, { observe: 'response' }).pipe(
      map(response => {
        const body = response.body as any;
  
        if (body && response.status === 200) {
          const token = body.token;
          const userId = body.id;
  
          localStorage.setItem('token', token);
          localStorage.setItem('userId', userId.toString());
  
          return body;
        } else {
          throw new Error('Erro inesperado');
        }
      }),
      catchError(error => {
        if (error.status === 400) {
          return throwError(() => new Error('Credenciais inválidas'));
        } else {
          return throwError(() => new Error('Erro ao tentar fazer login'));
        }
      })
    );
  }
  
  
  

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}`, {
      nome: name,
      usuario: email,
      senha: password
    });
  }
  

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}