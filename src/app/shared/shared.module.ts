import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './services/storage.service';
import { AdvService } from './services/adv.service';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    StorageService,
    AdvService
  ],
  exports:[TruncatePipe],
  declarations: [TruncatePipe]
})
export class SharedModule { }
