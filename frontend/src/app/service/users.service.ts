import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  createUser(newUser: any): Observable<any> {
    const userData = {
      name: newUser.name,
      lastName: newUser.lastName,
      userName: newUser.userName,
      password: newUser.password,
      repeatPassword: newUser.repeatPassword,
      email: newUser.email
    };

    return this.http.post('http://localhost:3001/auth/register', userData);
  }
}
