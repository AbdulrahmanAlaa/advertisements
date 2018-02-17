import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { API_URLS } from '../utilities/service-config';
import { Advertisement } from '../interfaces/advertisement';
import * as JsonQuery from 'jsonpath/jsonpath';
import { JSON_PATHS } from '../utilities/defines';

@Injectable()
export class AdvService {
  /**
    * component constructor and all parameters will injected my angular (dependency injection)
    * @param http 
  */
  constructor(private http: HttpClient) { }

  /**
   * retrieves apartments from the api
   * @return {Observable<Array<Advertisement>>} contains all returned apartments
   */
  getAll() : Observable<Array<Advertisement>> {
    return this.http.get(API_URLS.GET_ADS).map((advertisement) => {
      let result = JsonQuery.value(advertisement, JSON_PATHS.ADS.ROOT) as Array<Advertisement>;
      let adv: Advertisement;
      result = result.map((advertisement) => {
        //Create objects for sub properties that contains objects 
        adv = new Object() as Advertisement;
        
        //Map all properties with simple type 
        adv._id = JsonQuery.value(advertisement, JSON_PATHS.ADS.ID) || null;
        adv.additionalId = JsonQuery.value(advertisement, JSON_PATHS.ADS.ADDITIONAL_ID) ;
        adv.hasFurniture = JsonQuery.value(advertisement, JSON_PATHS.ADS.HAS_FURNITURE) ;
        adv.purpose = JsonQuery.value(advertisement, JSON_PATHS.ADS.PURPOSE);
        adv.title = JsonQuery.value(advertisement, JSON_PATHS.ADS.TITLE);
        adv.userWishes = JsonQuery.value(advertisement, JSON_PATHS.ADS.USER_WISHES);
        adv.realestateSummary = JsonQuery.value(advertisement, JSON_PATHS.ADS.REAL_ESTATE_SUMMARY.ROOT) ;
        adv.advertisementPrice = JsonQuery.value(advertisement, JSON_PATHS.ADS.ADV_PRICE.ROOT) ;
        adv.advertisementAssets = JsonQuery.value(advertisement, JSON_PATHS.ADS.ASSETS.ROOT) ;

        //Map complex objects as properties 
        if(adv.realestateSummary){//Defensive programming to prevent null.prop error 
          adv.realestateSummary.address = JsonQuery.value(adv.realestateSummary, JSON_PATHS.ADS.REAL_ESTATE_SUMMARY.ADDRESS);
          adv.realestateSummary.numberOfRooms = JsonQuery.value(adv.realestateSummary, JSON_PATHS.ADS.REAL_ESTATE_SUMMARY.NO_OF_ROOMS);
          adv.realestateSummary.space = JsonQuery.value(adv.realestateSummary, JSON_PATHS.ADS.REAL_ESTATE_SUMMARY.SPACE);
        }
        if (adv.advertisementPrice) {//Defensive programming to prevent null.prop error
          adv.advertisementPrice.baseRent = JsonQuery.value(adv.advertisementPrice, JSON_PATHS.ADS.ADV_PRICE.BASE_RENT);
          adv.advertisementPrice.sellPrice = JsonQuery.value(adv.advertisementPrice, JSON_PATHS.ADS.ADV_PRICE.SELL_PRICE);
        }
        return adv;
      });
      return result;
    });
  }
}
