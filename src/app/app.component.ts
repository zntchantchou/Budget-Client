import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// making http requests should happen after initialization
export class AppComponent implements OnInit {
  title = 'dating-client';
  users: any;
  loggedIn: boolean = false;

  constructor(private http: HttpClient, private accountService: AccountService) {}

  ngOnInit() {
    console.log("INIT APP");
    this.accountService.currentUser$.subscribe(res => {console.log('RES', res)})
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
