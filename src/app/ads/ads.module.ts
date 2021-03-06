import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsListComponent } from './ads-list/ads-list.component';
import { AdsListItemComponent } from './ads-list-item/ads-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule
  ],
  declarations: [AdsListComponent, AdsListItemComponent]
})
/**
 * the Video Module decorator that contains needed modules and providers for Video Module to run
 */
export class AdsModule { }
