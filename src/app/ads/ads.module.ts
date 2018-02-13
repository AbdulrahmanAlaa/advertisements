import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsListComponent } from './ads-list/ads-list.component';
import { AdsListItemComponent } from './ads-list-item/ads-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    AdsRoutingModule
  ],
  declarations: [AdsListComponent, AdsListItemComponent]
})
export class AdsModule { }
