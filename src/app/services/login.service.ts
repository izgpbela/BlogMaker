import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly httpClient = inject(HttpClient);

  login(username: string, password: string): Observable<{ token: string }> {
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/usuarios/login', {
      username,
      password
    } as LoginRequest).pipe(
      map((tokenResponse: LoginResponse) => {
        localStorage.setItem('token', tokenResponse.token);
        return tokenResponse;
      })
    );
  }

  getTotalUsers(): Observable<number> {
    return this.httpClient.get<number>('http://localhost:8080/api/users/total');
  }

  getPostStatsByDate(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:8080/api/posts/stats-by-date');
  }

  // ✅ Novo método para total de logins recentes
  getRecentLogins(): Observable<number> {
    return this.httpClient.get<number>('http://localhost:8080/api/logins/total');
  }
}
