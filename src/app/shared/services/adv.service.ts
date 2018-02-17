import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../utilities/service-config';
import { Advertisement } from '../interfaces/advertisement';
import * as JsonQuery from 'jsonpath/jsonpath';
import { JSON_PATHS } from '../utilities/defines';

@Injectable()
export class AdvService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(API_URLS.GET_ADS).map((advertisement)=>{
      let result =JsonQuery.value(advertisement, JSON_PATHS)  as Array<Advertisement>;
      const adv:Advertisement = new Object () as Advertisement;
      adv._id = JsonQuery.value(advertisement, JSON_PATHS.LOGIN.TOKEN) || null;
    });
  }
}
