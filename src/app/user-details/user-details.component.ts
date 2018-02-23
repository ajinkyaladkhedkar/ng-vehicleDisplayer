import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  users = [
    {
      "id": "55b1bdb3-9905-4a68-b606-2e361e294a8e",
      "firstName": "Karlee",
      "lastName": "Wolff",
      "email": "Dante82@yahoo.com",
      "address": {
        "street": "306 Willms Creek",
        "city": "Evangelinehaven",
        "zip": "69290",
        "state": "KY",
        "country": "USA"
      },
      "dateCreated": "2018-02-22T15:16:34.377Z",
      "company": {
        "name": "Legros, Bernhard and Hills",
        "website": "http://cora.net"
      },
      "profilePic": "http://lorempixel.com/640/480/nature"
    },
    {
      "id": "196e1198-672a-446d-bc3c-9e0a64084ab2",
      "firstName": "Gladys",
      "lastName": "Murazik",
      "email": "Destin_Fisher25@yahoo.com",
      "address": {
        "street": "36125 Cole Plain",
        "city": "Karimouth",
        "zip": "59012-3397",
        "state": "UT",
        "country": "USA"
      },
      "dateCreated": "2018-02-22T08:16:34.233Z",
      "company": {
        "name": "Gibson, Jast and Russel",
        "website": "https://gabriel.info"
      },
      "profilePic": "http://lorempixel.com/640/480/people"
    }];
}
