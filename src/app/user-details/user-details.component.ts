import { Component, OnInit } from '@angular/core';
import {UserDetailsService} from '../user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  myusers;
  constructor(userDetailsService: UserDetailsService) {
    userDetailsService.getUsers()
      .subscribe(
        returnusers => this.myusers = returnusers,
        error => console.log(error)
        );
  }
}
