import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsListComponent } from './ads-list/ads-list.component';
/**
 * holds the advertisement related routes 
 */
const routes: Routes = [
  {
    path:'',
    component: AdsListComponent
  }
];
/**
 * the advertisement Route decorator that contains needed modules and routs 
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
