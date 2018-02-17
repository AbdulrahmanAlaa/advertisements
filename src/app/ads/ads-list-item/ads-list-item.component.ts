import { Advertisement } from './../../shared/interfaces/advertisement';
import { Component, Input } from '@angular/core';
/**
 * the Advertisement item component decorator that contains info for html file 
 */
@Component({
  selector: 'adv-list-item',
  templateUrl: './ads-list-item.component.html'
})
export class AdsListItemComponent {

  /** holds only single advertisements */
  @Input()
  advertisement: Advertisement;
}
