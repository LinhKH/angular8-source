import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8-source';
  public loading: boolean = false;

  constructor(private router: Router, public titleService: Title, private _location: Location) {
    this.setTitle('');
    router.events.subscribe((val) => {
      //console.log(val instanceof NavigationEnd) 
    });
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  public back() {
    this._location.back();
  }
}
