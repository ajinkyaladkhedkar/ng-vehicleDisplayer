import { Component, OnInit } from '@angular/core';
import {UserDetailsService} from '../user-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-specific-user-details',
  templateUrl: './specific-user-details.component.html',
  styleUrls: ['./specific-user-details.component.css']
})
export class SpecificUserDetailsComponent {
  myuser;
  constructor(private route: ActivatedRoute, private userDetailsService: UserDetailsService) {
    this.route.params.subscribe(params =>
      userDetailsService.getUsersById(params.id)
        .subscribe(getUser => this.myuser = getUser)
  );
  }
}
