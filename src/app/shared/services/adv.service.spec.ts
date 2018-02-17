import { TestBed, inject } from '@angular/core/testing';

import { AdvService } from './adv.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs/Observable';
import { API_URLS } from '../utilities/service-config';

describe('AdvService', () => {
  //Mocking Services
  class MockUserService {
    getUserInfo() {
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
        { provide: UserService, useClass: MockUserService },
        HttpClient,
        AuthService,
        StorageService,
        AdvService
      ]
    });
  });

  it('should be created', inject([AdvService], (service: AdvService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieves all the advertisements from the api', inject([AdvService, HttpTestingController], (service: AdvService, http: HttpTestingController) => {
    service.getAll().subscribe((response) => {
      expect(response).toBeDefined();
    });
    http.expectOne(API_URLS.GET_ADS).flush({
      data:
        [{
          advertisementAssets: [],
          additionalId: 1,
          advertisementPrice: { baseRent: 15.15, sellPrice: 1155.555 },
          hasFurniture: true,
          purpose: 1,
          realestateSummary: { address: '', numberOfRooms: 5, space: 15.55 },
          title: 'any title',
          userWishes: true,
          _id: { $id: 'asdjvhjfahsd' }
        }]
    }, { status: 200, statusText: 'Ok' });
  }));

});
