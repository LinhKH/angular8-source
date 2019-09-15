import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './guards/auth.guard';


const routesDefine: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './front-page/front-page.module#FrontPageModule' },
  {
    path: 'admin', loadChildren: './admin-page/admin-page.module#AdminPageModule', canActivate: [AuthGuard],
    data: {
      breadcrumb: "Admin_br"
    }
  },
  {
    path: 'login', component: LoginPageComponent,
    data: {
      breadcrumb: "Login_br"
    }
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routesDefine)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
