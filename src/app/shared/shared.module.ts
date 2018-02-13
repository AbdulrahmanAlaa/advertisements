import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './services/storage.service';
import { AdsService } from './ads.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    StorageService,
    AdsService
  ],
  declarations: []
})
export class SharedModule { }
