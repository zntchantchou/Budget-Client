import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss'],
})
export class LoginPageComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router, private toaster: ToastrService) { }

  loggedIn: boolean = false;
  model: any = {};
  @Output() usernameChangeEvent = new EventEmitter<string>();
  
  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model)
    .subscribe(res => {
      console.log('this.loginBtnEnabled');
      this.loggedIn = true;
      this.router.navigate(['/users']);
    })
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
