import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/User';
import { ToastrService } from 'ngx-toastr';

// this service can be injected in other places in the app
@Injectable({
  //  no need to inject it manually inside app.module.ts (providers[])
  providedIn: 'root',
})

// a service is a Singleton, the data will not be destroyed during the life of the application
export class AccountService {
  baseUrl = 'https://localhost:5001/api/account/';
  // similar to a buffer
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private toaster: ToastrService) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((res: User) => {
        const user = res;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          // pass the user to our buffer
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(model: any) {
    console.log('[Account Service] Register', model);
    this.http.post(this.baseUrl + 'register', model)
      .subscribe(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user as User);
        console.log('[accountService] user saved', user);
      }, (err) => {
        const {errors} = err.error;
        const errorMessages: string[] = Object.values(errors);
        errorMessages.map((errMessage: string) => this.toaster.error(errMessage))
      });
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
