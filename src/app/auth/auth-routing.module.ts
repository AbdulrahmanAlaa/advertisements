import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
/**
 * holds the route related to the login component
 */
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];
/**
 * the Auth Route decorator that contains needed modules and routs 
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
