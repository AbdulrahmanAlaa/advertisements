import { Advertisement } from './../../shared/interfaces/advertisement';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'adv-list-item',
  templateUrl: './ads-list-item.component.html',
  styleUrls: ['./ads-list-item.component.scss']
})
export class AdsListItemComponent implements OnInit {

  @Input()
  advertisement:Advertisement;

  constructor() { }

  ngOnInit() {
  }

}
