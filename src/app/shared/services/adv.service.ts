import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../utilities/service-config';

@Injectable()
export class AdvService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(API_URLS.GET_ADS);
  }
}
