import { User } from './../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from './../utilities/service-config';
import { Injectable } from '@angular/core';
import * as JsonQuery from 'jsonpath/jsonpath';
import { JSON_PATHS } from '../utilities/defines';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  /** 
   * 
  */
  getUserInfo() {
    return this.http.get(API_URLS.GET_User_DATA).map((response)=>{
      const user :User = new Object() as User;
      user.id =  JsonQuery.value(response, JSON_PATHS.USER.ID) || 0;
      user.avatar =  JsonQuery.value(response, JSON_PATHS.USER.AVATAR) || '';
      user.first_name=  JsonQuery.value(response, JSON_PATHS.USER.FNAME) || 0;
      user.last_name=  JsonQuery.value(response, JSON_PATHS.USER.LNAME) || 0;
        return user;
    });
  }
}
