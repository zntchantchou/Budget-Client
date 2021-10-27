import { Component, Input, OnInit } from '@angular/core';
import { User } from '../_models/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  constructor() { }
  @Input() user: User;

  ngOnInit(): void {
  }

}
