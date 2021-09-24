import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css'],
})
export class LoginPageComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router, private toaster: ToastrService) { }

  loggedIn: boolean = false;
  model: any = {};
  @Output() usernameChangeEvent = new EventEmitter<string>();
  
  ngOnInit(): void {
  }

  login() {
    console.log('[Login-form] login before request', this.model);
    this.accountService.login(this.model)
    .subscribe(res => {
      console.log('[login-form] after request', res);
      console.log('this.loginBtnEnabled');
      this.loggedIn = true;
      this.router.navigate(['/friends']);
    }, err => {
      console.log(err);
      this.toaster.error(err.error);
    }) ;
  }

  goToSignUp() {
    console.log('[loginPage] goToSignUp');
    this.router.navigate(['/register']);
  }

  logout() {
    this.loggedIn = false;
    console.log('Logged out');
    this.accountService.logout();
  }
}
