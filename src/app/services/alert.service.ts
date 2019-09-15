import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import * as config from './config/config';
import * as _ from 'lodash';
@Injectable()
export class AlertService {
  private subject = new BehaviorSubject<any>(null);
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // clear alert message on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.subject.next(null);
        }
      }
    });
  }

  dialog(msg: string, _type = 'suscess', title: string = "メッセージ", callback: any = {}, callbackReject: any = {}) {
    this.subject.next({ type: _type, text: msg, style: 'dialog', title: title, callback: callback, callbackReject: callbackReject });
  }

  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterNavigationChange = false, param = []) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
    try {
      return this.subject;
    } catch (e) {
      console.log(e);
    }
  }

  showErrorRequest(Obj) {
    let msg = '';
    if (Obj.code == config.ERR_CODE.APP_ERROR_COMMON) {
      if (config.ERR_MSG[Obj.message]) {
        msg += ' ' + config.getErrorMessage(Obj.message) + `\n<br/>`;
      } else {
        if (_.has(Obj, 'data.errPaymentDetail'))//api payment GMO
          Object.values(Obj.data.errPaymentDetail).forEach(r => { msg += ' ' + r + `\n<br/>` });
        if (Obj.data.length == 0) msg += ' ' + Obj.message + `\n<br/>`;
      }
    }
    if (Obj.code == config.ERR_CODE.VALIDATION_ERROR_FIELD) {
      if (_.has(Obj, 'data'))//default validate
        Object.values(Obj.data).forEach(r => { msg += ' ' + r + `\n<br/>` });
    }
    if (Obj.code == config.ERR_CODE.SQL_FIELD_ERROR) {
      if (Obj.data.length == 0) msg += ' ' + Obj.message + `\n<br/>`;
      else
        Object.values(Obj.data).forEach(r => { msg += ' ' + config.ERR_MSG.SQL_FIELD_ERROR + `\n<br/>` });
    }
    if (msg && msg != '' && Obj.code != config.ERR_CODE.OK) this.dialog(msg);
    else {
      console.log('validate error with no message')
    }
  }
}
