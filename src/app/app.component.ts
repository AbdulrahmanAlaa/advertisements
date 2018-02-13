import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES, DEFAULT_LANGUAGE } from '../app/shared/utilities/defines';

@Component({
  selector: 'adv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
  public title:string;

  constructor(private translate: TranslateService) {
    translate.addLangs(LANGUAGES);
    translate.setDefaultLang(DEFAULT_LANGUAGE);
    translate.use(DEFAULT_LANGUAGE);
  }

}
