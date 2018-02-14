import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from './shared/utilities/pages-config';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: config.advertisements.name,
    pathMatch: 'full'
  },
  {
    path:  config.advertisements.name,
    loadChildren: config.advertisements.loadChildrens,
  },
  {
    path: config.login.name,
    loadChildren: config.login.loadChildren
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
