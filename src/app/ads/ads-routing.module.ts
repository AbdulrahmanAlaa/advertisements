import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsListComponent } from './ads-list/ads-list.component';

const routes: Routes = [
  {
    path:'',
    component: AdsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
