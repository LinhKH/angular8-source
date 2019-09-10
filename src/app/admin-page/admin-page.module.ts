import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminPageComponent } from './admin-page.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [AdminPageComponent, DashboardComponent, MenusComponent, PostsComponent, AdminNavbarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminPageModule { }
