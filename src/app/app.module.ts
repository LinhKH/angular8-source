
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { APP_CONFIG, AppConfig } from './app.config';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AdminPageModule } from './admin-page/admin-page.module';
import { FrontPageModule } from './front-page/front-page.module';
import { MaterialModule } from './material.module';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AlertComponent } from './alert/alert.component';


import { AuthenticationService } from './services/login/authentication.service';
import { AlertService } from './services/alert.service';
import { FileService } from './services/file.service';
import { RequestService } from './services/request.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    AlertComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AdminPageModule,
    FrontPageModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthGuard,
    RequestService,
    FileService,
    AuthenticationService,
    AlertService,
    { provide: APP_CONFIG, useValue: AppConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
