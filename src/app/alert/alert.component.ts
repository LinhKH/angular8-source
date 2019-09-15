import { Component, OnDestroy, Output, EventEmitter, Input } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { AlertService } from './../services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnDestroy {

  @Output() _Ok = new EventEmitter();
  @Input() addClass;
  subscription: Subscription;
  messages: any = [];
  messages_dialog: any = null;
  constructor(private alertService: AlertService, private sanitizer: DomSanitizer) {
    this.subscription = alertService.getMessage().subscribe(message => {
      if (message) {
        if (message.style == 'dialog')
          this.messages_dialog = message;
        else {
          this.messages.push(message);
          setTimeout(function () { this.closePopup(0); }.bind(this), 5000);
        }
      }
    });
  }
  closePopup(i) {
    this.messages.splice(i, 1);
  }
  closeDiaglog(result) {
    if (result == 'Ok') {
      this._Ok.emit(result);
      if (typeof (this.messages_dialog.callback) == 'function') this.messages_dialog.callback();
    }
    else
      if (typeof (this.messages_dialog.callbackReject) == 'function') this.messages_dialog.callbackReject();
    delete (this.messages_dialog);
  }
  ngOnDestroy(): void {
    // unsubscribe on destroy to prevent memory leaks
    this.subscription.unsubscribe();
  }
  fillTag(msg) {
    return this.sanitizer.bypassSecurityTrustHtml(msg);
  }

}
