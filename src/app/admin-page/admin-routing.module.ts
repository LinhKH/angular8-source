import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPageComponent } from './admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const routesAdmin: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: '', pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'menus',
        component: MenusComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      // {
      //   path: '**',
      //   component: PageNotFoundComponent
      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
