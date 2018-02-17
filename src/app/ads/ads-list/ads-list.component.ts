import { Advertisement } from './../../shared/interfaces/advertisement';
import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../shared/services/adv.service';
import { trigger, style, transition, keyframes, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'adv-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-70px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ]))
        ]), { optional: true })

      ])
    ])
  ]
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
    this.currentAdvertisements =this.advertisements.slice((0) , ++this.pageCurrent * 10) 
    // const temp = this.advertisements.slice((this.pageCurrent * 10) , ++this.pageCurrent * 10)
    // setTimeout(()=>{
    //   this.currentAdvertisements.push(...temp);
    // },1000)
  }

}
