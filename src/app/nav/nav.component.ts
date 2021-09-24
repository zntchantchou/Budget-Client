import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public accountService: AccountService) { }
  public user: any;
  ngOnInit(): void {
    this.accountService.currentUser$.subscribe(value => this.user = value);
  }

  logout() {
    console.log("[nav-component] logout")
    this.accountService.logout();
  }
}
