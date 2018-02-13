import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from './shared/utilities/pages-config';

const routes: Routes = [
  {
    path: '',
    redirectTo: config.advertisements.name,
    pathMatch: 'full'
  },
  {
    path:  config.advertisements.name,
    loadChildren: config.advertisements.loadChildrens,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
