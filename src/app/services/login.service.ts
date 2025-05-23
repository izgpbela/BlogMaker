import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {private readonly httpClient = inject(HttpClient);

  login(username: string, password: string): Observable<{ token: string }> {
  interface LoginRequest {
    username: string;
    password: string; 
  }

  interface LoginResponse {
    token: string;
  }

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

}
