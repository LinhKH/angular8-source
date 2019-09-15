import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/login/authentication.service';
import { AlertService } from '../services/alert.service';
import * as config from './../services/config/config';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  title = 'Login';
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {
    if (localStorage.getItem('currentUser'))
      this.router.navigate([config.API.ENV.adminpage]);
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.user_id, this.model.password)
      .subscribe(
        result => {
          switch (result.code) {
            case config.ERR_CODE.OK:
              if (typeof (result.type) != 'undefined')
                this.router.navigate([this.returnUrl + result.type]).catch(e => {
                  console.log('Route not found, redirection stopped with no error raised', e);
                });
              else
                this.router.navigate([config.API.ENV.adminpage]);
              break;
            case config.ERR_CODE.VALIDATION_ERROR_FIELD:
              this.model.password = '';
              Object.keys(result.data).forEach(i => {
                this.alertService.error(result.data[i]);
              })
              break;
            case config.ERR_CODE.APP_ERROR_LOGIN:
              this.model.password = '';
              this.alertService.error(result.message);
              break;
          }
          this.loading = false;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        },
        () => this.loading = false);
  }

}
