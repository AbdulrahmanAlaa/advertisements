import { Advertisement } from './../../shared/interfaces/advertisement';
import { Component, Input } from '@angular/core';
/**
 * the Advertisement item component decorator that contains info for html file 
 */
@Component({
  selector: 'adv-list-item',
  templateUrl: './ads-list-item.component.html',
  styleUrls:['./ads-list-item.component.scss']
})
export class AdsListItemComponent {

  /** holds only single advertisements */
  @Input()
  advertisement: Advertisement;
}
