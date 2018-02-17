import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../shared/services/adv.service';

@Component({
  selector: 'adv-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit {

  constructor(private advService:AdvService) { }

  ngOnInit() {
  this.advService.getAll().subscribe((results)=>{
    console.log('results:',results);
  });
  }

}
