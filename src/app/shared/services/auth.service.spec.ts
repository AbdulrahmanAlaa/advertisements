import { Observable } from 'rxjs/Observable';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { API_URLS } from '../utilities/service-config';
import { UserService } from './user.service';

describe('AuthService', () => {
  //Mocking Services
  class MockUserService {
    getUserInfo(){
      return Observable.of({
        id: 2,
        first_name: 'first name',
        last_name: 'last name',
        avatar: 'url'
      });
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        {provide:UserService,useClass:MockUserService},
        HttpClient,
        AuthService,
        StorageService
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should authenticate the user', inject([AuthService,HttpTestingController], (service: AuthService, http: HttpTestingController) => {
    service.authenticate("ali", "password", true).subscribe((response) => {
      expect(service.isAuthenticated()).toBe(true);
    });
    http.expectOne(API_URLS.Login).flush({token:'asd'}, { status: 200, statusText: 'Ok' });
  }));


  it('should log the user out', inject([AuthService,HttpTestingController], (service: AuthService, http: HttpTestingController) => {
    service.authenticate("ali", "password", true).subscribe((response) => {
      service.logout();
      expect(service.isAuthenticated()).toBe(false);
    });
    http.expectOne(API_URLS.Login).flush({token:'asd'}, { status: 200, statusText: 'Ok' });
  }));

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));
});
