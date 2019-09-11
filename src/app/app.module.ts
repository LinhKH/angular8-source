import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AdminPageModule } from './admin-page/admin-page.module';
import { FrontPageModule } from './front-page/front-page.module';
import { MaterialModule } from './material.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { AuthGuard } from './guards/auth.guard';
import { SubcriberGuard } from './guards/subcriber.guard';

import { environment } from 'src/environments/environment';
import { AfService } from './providers/af.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { MenusService } from './services/menus/menus.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AdminPageModule,
    FrontPageModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    AfService, AuthGuard, SubcriberGuard, MenusService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
