import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../admin-page/material.module';

import { FrontPageComponent } from './front-page.component';
import { FrontNavbarComponent } from './front-navbar/front-navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PagesListComponent } from './pages-list/pages-list.component';

import { FrontRoutingModule } from './front-routing.module';



@NgModule({
  declarations: [FrontPageComponent, FrontNavbarComponent, HomePageComponent, PagesListComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    MaterialModule
  ]
})
export class FrontPageModule { }
