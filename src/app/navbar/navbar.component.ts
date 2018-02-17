import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../shared/services/storage.service';
import { config } from '../shared/utilities/pages-config';
/**
 * the navigation component decorator that contains info and html and css related to the class 
 */
@Component({
  selector: 'adv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  /**
    * holds the user login status object to point for same object in Storage Service
    */
  status: { isLoggedIn: boolean };
  
  /**
   * using angular DI system to inject needed services in single tone 
   * @param storageService 
   * @param router 
   * @param authService 
   */
  constructor(
    private storageService: StorageService,
    private router: Router,
    private authService: AuthService
  ) {
    /**
     * get the user status from storage service to show login Or logout in nav bar
     */
    this.status = this.storageService.status;
  
   }
  logout() {
    this.authService.logout();
    this.storageService.status.isLoggedIn = false;
    this.router.navigate([config.login.route]);
  }

}
