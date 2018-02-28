import { Component, OnInit } from '@angular/core';
import {UserDetailsService} from '../user-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-specific-user-details',
  templateUrl: './specific-user-details.component.html',
  styleUrls: ['./specific-user-details.component.css']
})
export class SpecificUserDetailsComponent implements OnInit {
  myuser;
  constructor(private route: ActivatedRoute, private userDetailsService: UserDetailsService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.userDetailsService.getUsersById(params.id)
        .subscribe(getUser => this.myuser = getUser)
    );
  }
}
