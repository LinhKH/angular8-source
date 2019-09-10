import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';


const routesDefine: Routes = [
  { path: 'home', loadChildren: './front-page/front-page.module#FrontPageModule' },
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', loadChildren: './admin-page/admin-page.module#AdminPageModule' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routesDefine)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
