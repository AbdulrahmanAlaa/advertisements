import { Observable } from 'rxjs/Observable';
import { User } from './../interfaces/user';
import { TestBed, inject, async } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeBackendProvider } from '../mocks/http-interceptor';
import { API_URLS } from '../utilities/service-config';



describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        HttpClient,
        UserService
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should get user info from server', async(inject([UserService, HttpTestingController], (service: UserService, http: HttpTestingController) => {
    service.getUserInfo().subscribe((user: User) => {
      expect(user).toBeDefined();
    });
    http.expectOne(API_URLS.GET_User_DATA).flush({
      id: 2,
      first_name: 'first name',
      last_name: 'last name',
      avatar: 'url'
    }, { status: 200, statusText: 'Ok' });
  })));

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));
});
