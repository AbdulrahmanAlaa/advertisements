import { Advertisement } from './../../shared/interfaces/advertisement';
import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../shared/services/adv.service';

@Component({
  selector: 'adv-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit {

  constructor(private advService: AdvService) { }
  /** holds the current page NO */
  pageCurrent: number = 1;

  /** Current Displayed */
  currentAdvertisements: Array<Advertisement>;

  /** holds all the advertisement returned from the service  */
  advertisements: Array<Advertisement>;

  ngOnInit() {
    this.advService.getAll().subscribe((advertisements) => {
      this.advertisements = advertisements;
      this.currentAdvertisements = this.advertisements.slice(0, this.pageCurrent * 10);
      console.log(this.currentAdvertisements);
    });
  }
  /** loads more 10 items */
  loadMoreTen() {
    this.currentAdvertisements = this.advertisements.slice(0, ++this.pageCurrent * 10);
  }

}
