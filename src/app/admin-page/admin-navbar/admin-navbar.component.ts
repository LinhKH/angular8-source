import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/providers/user';
import { AfService } from 'src/app/providers/af.service';

@Component({
  selector: 'admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  user: User;
  constructor(
    public afService: AfService
  ) { }

  ngOnInit() {
    this.afService.user$.subscribe(user => {
      this.user = user;
    })
  }

}
