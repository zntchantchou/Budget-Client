import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// making http requests should happen after initialization
export class AppComponent implements OnInit {
  title = 'dating-client';
  users: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUsers();
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
}
