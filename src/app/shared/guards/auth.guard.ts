import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { config } from '../utilities/pages-config';
/**
 * the Auth Guard decorator that help angular DI system to work  
 */
@Injectable()
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {
  /**
    * parameters passed by angular Dependecy Injection
    * @param Router 
    * @param authService 
    */
  constructor(
    private authService: AuthService,
    private Router: Router
  ) {

  }
  /**
     * Guards checking the user is logged in or not and prevent
     * unAuth users for accessing the routes in lazy load
     * @param route holds the current route object
     */
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    let url = route.path;
    return this.validate(url);
  }
  /**
    * Guards checking the user is logged in or not and prevent
    * unAuth users for accessing the routes 
    * @param next 
    * @param state 
    */
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }

  /**
 * Guards checking the user is logged in or not and prevent
 * unAuth users for accessing the routes 
 * @param next 
 * @param state 
 */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.validate(state.url);
  }

  /**
   * handle user redirection to target urls or Login page after checking 
   * User Auth state 
   * @param url 
   */
  validate(url: string): boolean {
    let qstr = {};
    if (url)
      qstr = {
        queryParams: {
          returnUrl: url
        }
      };
    if (this.authService.isAuthenticated())
      return true;
    return !this.Router.navigate([config.login.route], qstr);
  }
}
