import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FrontPageComponent } from './front-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PagesListComponent } from './pages-list/pages-list.component';


const routesFront: Routes = [
  {
    path: '',
    component: FrontPageComponent,
    children: [
      {
        path: '', pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'article',
        component: PagesListComponent
      },
      {
        path: 'pages',
        component: PagesListComponent
      },
      // {
      //   path: '**',
      //   component: PageNotFoundComponent
      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesFront)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
