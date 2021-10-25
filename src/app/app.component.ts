import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// making http requests should happen after initialization
export class AppComponent implements OnInit {
  title = 'dating-client';
  users: any;
  loggedIn: boolean = false;
  public routeName: string = "";

  constructor(private http: HttpClient, public accountService: AccountService) {}

  ngOnInit() {
    console.log("[AppComponent] ngOnInit");
    this.accountService.currentUser$.subscribe(res => {console.log('RES', res)})
  }

  ngOnChanges(): void {
    console.log("OnChanges routeName: ", this.routeName);
  }

  logChangeEvent(event: string) {
    console.log('[AppComponent] logChangeEvent', event);
    this.routeName = event;
  }

  getUsers() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');

    this.http.get('https://localhost:5001/api/users', {headers}).subscribe(
      (res) => {
        this.users = res;
        console.log('users', this.users);
      },
      (err) => console.log(err)            
    );
  }

  setCurrentUser() {
    const user = localStorage.getItem('user') as string;
    const formattedUser = JSON.parse(user);
    this.accountService.setCurrentUser(formattedUser);
  }
};
