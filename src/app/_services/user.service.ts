import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../_models/authUser';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.baseUrl + 'users', httpOptions);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + 'user/' + id, httpOptions);
  }

  getUserByEmail(email: string) {
    return this.http.get<User>(
      this.baseUrl + 'user/email' + email,
      httpOptions
    );
  }
}
