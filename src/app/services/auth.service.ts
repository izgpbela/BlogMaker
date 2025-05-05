import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth'; // Adjust backend URL as needed

  constructor(private http: HttpClient) { }

  register(user: Usuario): Observable<any> {
    return this.http.post(this.baseUrl + '/register', user);
  }

  login(credentials: { email: string; senha: string }): Observable<any> {
    return this.http.post(this.baseUrl + '/login', credentials);
  }

  logout(): void {
    // Implement logout logic, e.g., remove token from storage
    localStorage.removeItem('authToken');
  }
}
