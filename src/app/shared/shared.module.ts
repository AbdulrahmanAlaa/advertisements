import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './services/storage.service';
import { AdvService } from './services/adv.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    StorageService,
    AdvService
  ],
  declarations: []
})
export class SharedModule { }
