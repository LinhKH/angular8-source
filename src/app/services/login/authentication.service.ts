import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as config from '../config/config';
import { RequestService } from './../request.service';

@Injectable()
export class AuthenticationService {
    constructor(private rq: RequestService) { }

    login(user_id: string, password: string) {
        return this.rq.send_request(config.API.login, 'POST', { user_id: user_id, user_password: password })
            .map(user => {
                if (user && user.code == config.ERR_CODE.OK) {
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  localStorage.setItem('TOKEN', user.data.accessToken);
                  localStorage.setItem('SECRET_TOKEN', user.data.refreshToken);
                  localStorage.setItem('PERMISSION', JSON.stringify(user.data.permission));
                  var now = new Date().getTime().toString();
                  localStorage.setItem('SECRET_TOKEN_TIME', now);
                }
                return user;
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    get(col = null) {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if (col) {
            return user.data[col] ? user.data[col] : null;
        } else {
           return user.data;
        }
    }
}