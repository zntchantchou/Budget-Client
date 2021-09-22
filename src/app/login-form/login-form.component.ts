import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  loggedIn: boolean = false;
  model: any = {};

  ngOnInit(): void {
  }

  login() {
    console.log('[Login-form] login', this.model);
    this.accountService.login(this.model)
    .subscribe(res => {
      console.log('[login-form]', res);
      console.log('this.loginBtnEnabled');
      this.loggedIn = true;
    }, err => {
      console.log(err);
    }) ;
  }

  logout() {
    this.loggedIn = false;
    console.log('Logged out');
    this.accountService.logout();
  }
}
