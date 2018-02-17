import { UserService } from './user.service';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import 'rxjs/add/operator/map';
import { forkJoin } from "rxjs/observable/forkJoin";

import { StorageService } from './storage.service';

import * as JsonQuery from 'jsonpath/jsonpath';
import { API_URLS } from "../utilities/service-config";
import { TOKEN, JSON_PATHS, USER } from "../utilities/defines";
import { User } from "../interfaces/user";
/**
 * the Auth Service decorator that help angular DI system to work  
 */
@Injectable()
export class AuthService {
  /**
   * parameters passed by angular Dependecy Injection 
   * @param storageService 
   * @param userService 
   * @param http 
   * @param router 
   */
  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private http: HttpClient,
    private router: Router
  ) { }


  /**
 * Check if the user already have tokens and userProfile
 * @return boolean indicated if the user Authenticated or not
 */
  public isAuthenticated(): boolean {
    debugger;
    return (this.storageService.user || this.storageService.token || this.storageService.getStorage(USER) || this.storageService.getStorage(TOKEN) || this.storageService.getSession(TOKEN)) ? true : false;
  }

  /**
   * clear user info and redirect the user to the login page  
   */
  logout() {
    //clear the localStorage and global objects in the service
    this.storageService.empty();
    this.storageService.user = null;
    this.storageService.token = null;
    this.storageService.setStorage(TOKEN, null);
  }

  /**
   * Authenticate The User using Auth Service  
   * @param username {string} username
   * @param password {string} Password
   * @param remember {boolean} auto login user 
   */
  authenticate(username: string, password: string, remember: boolean): Observable<any> {
    //Sending Username and  Password To The Server
    const tokens = this.http.post(API_URLS.Login, { username, password })
    //Get user Data info from server
    const userInfo = this.userService.getUserInfo();
    return forkJoin([tokens, userInfo]).map((results: any) => {
      this.storageService.status.isLoggedIn = true;
      this.storageService.user = results[1] as User;
      this.storageService.token = JsonQuery.value(results[0], JSON_PATHS.LOGIN.TOKEN) || null;
      //Keeps the user logged in after closing the tabs
      this.storageService.setSession(TOKEN, this.storageService.token);
      this.storageService.setSession(USER, this.storageService.user);
      if (remember) {
        this.storageService.setStorage(TOKEN, this.storageService.token);
        this.storageService.setStorage(USER, this.storageService.user);
      }
    });
  }



}