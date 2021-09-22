import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/User';

// this service can be injected in other places in the app
@Injectable({
  //  no need to inject it manually inside app.module.ts (providers[])
  providedIn: 'root',
})

// a service is a Singleton, the data will not be destroyed during the life of the application
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  // akin to a buffer
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      // @ts-ignore
      map((res: User) => {
        const user = res;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          // pass the user to our buffer
          this.currentUserSource.next(user);
        }
      })
    )
  }

  logout() {
    console.log('[account-services] logged out');
    localStorage.removeItem('user');
    // @ts-ignore
    this.currentUserSource.next(null);
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }
}
