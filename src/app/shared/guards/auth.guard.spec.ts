import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, UrlSegment, RouterStateSnapshot, Route } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { config } from '../utilities/pages-config';

describe('AuthGuard', () => {
  let activatedRouteSnapshot: ActivatedRouteSnapshot;
  beforeEach(() => {
    //Mocking Services
    class MockAuthService {
      authenticate() {
        return Observable.of({});
      }
      isAuthenticated() {
        return false;
      }
    }
    let urlSegment = new Object() as UrlSegment;
    urlSegment.path = '/movies';
    urlSegment.parameters = {};

    activatedRouteSnapshot = {
      url: [urlSegment]
      , params: {}
      , queryParams: {}
      , fragment: ''
      , data: {}
      , outlet: '',
      component: null,
      routeConfig: null,
      root: null,
      parent: null,
      firstChild: null,
      children: null,
      pathFromRoot: null,
      paramMap: null,
      queryParamMap: null
    };
    let snap: RouterStateSnapshot;
    snap = { url: '/movies', root: null };
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers:
        [
          { provide: AuthService, useClass: MockAuthService },
          AuthGuard
        ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should prevent the user ', inject([AuthGuard, AuthService], (guard: AuthGuard, authService: AuthService) => {
    let snap: RouterStateSnapshot;
    snap = { url: config.advertisements.route, root: null };
    expect(guard.canActivate(activatedRouteSnapshot, snap)).toBeFalsy();
  }));
  it('should allow the user ', inject([AuthGuard, AuthService], (guard: AuthGuard, authService: AuthService) => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    let snap: RouterStateSnapshot;
    snap = { url: config.advertisements.route, root: null };
    expect(guard.canActivate(activatedRouteSnapshot, snap)).toBeTruthy();
  }));

  it('should prevent the user ', inject([AuthGuard, AuthService], (guard: AuthGuard, authService: AuthService) => {
    let route: Route = { path: '/movies' };
    expect(guard.canLoad(route)).toBeFalsy();
  }));
  it('should allow the user ', inject([AuthGuard, AuthService], (guard: AuthGuard, authService: AuthService) => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    let route: Route = { path: '/movies' };
    expect(guard.canLoad(route)).toBeTruthy();
  }));
});
