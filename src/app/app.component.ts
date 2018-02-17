import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES, DEFAULT_LANGUAGE } from '../app/shared/utilities/defines';

@Component({
  selector: 'adv-root',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  
/**
   * parameters passed by angular Dependency Injection 
   * @param translate  
   */
  constructor(private translate: TranslateService) {
    //Configure the Language to be English by default
    translate.addLangs(LANGUAGES);
    translate.setDefaultLang(DEFAULT_LANGUAGE);
    translate.use(DEFAULT_LANGUAGE);
  }

}
