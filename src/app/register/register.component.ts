import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// import { User } from '../_models/User';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  @Output() cancelRegistration = new EventEmitter<boolean>();
  @Output() registerUserEvent = new EventEmitter<any>();

  constructor(toaster: ToastrService, private accountService: AccountService) { }
// TODO add fields for the signup Form bback
  ngOnInit(): void {
  }

  registerUser() {
    console.log("[RegisterComponent] registerUser", this.model);
    this.accountService.register(this.model);
  }

  cancelRegister() {
    console.log("[RegisterComponent] cancelRegister");
    this.cancelRegistration.emit(false);
  }
}
