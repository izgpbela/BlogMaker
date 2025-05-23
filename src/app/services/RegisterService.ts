// src/app/services/register.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly httpClient = inject(HttpClient);

  register(userData: any): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/usuarios/inserir', userData)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}