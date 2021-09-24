import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../_models/User';

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})

export class HomeComponent implements OnInit {
  public registerMode = false;
  users: any;

   
  constructor(private http: HttpClient, private accountService: AccountService) { }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users')
      .subscribe(res => this.users = res);
  }

  registerUser(event: any) {

  }

  cancelRegisterMode(event: boolean) {
    console.log('[HomeComponent] cancelRegisterMode', event);
    this.registerMode = event;
  }
}
