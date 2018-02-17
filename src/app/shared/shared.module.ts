import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './services/storage.service';
import { AdvService } from './services/adv.service';
import { TruncatePipe } from './pipes/truncate.pipe';
/**
 * the Shared Module decorator that contains reusable Components Pipes Services Guards ....
 */
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
