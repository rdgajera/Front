import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import User from './User';
import { Observable } from 'rxjs';

const serverURL = `http://localhost:8080/api`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  public setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();

    if (token) {
      return true;
    } else {
      return false;
    }
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(`${serverURL}/user/login`, user);
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${serverURL}/user/register`, user);
  }
}
