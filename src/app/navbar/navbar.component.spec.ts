import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../shared/shared.module';
import { HttpLoaderFactory } from '../app.module';
import { AuthService } from '../shared/services/auth.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  //Mocking Services
  class MockAdvService {
    getAll() {
      return Observable.of([{
        advertisementAssets: [],
        additionalId: 1,
        advertisementPrice: { baseRent: 15.15, sellPrice: 1155.555 },
        hasFurniture: true,
        purpose: 1,
        realestateSummary: { address: '', numberOfRooms: 5, space: 15.55 },
        title: 'any title',
        userWishes: true,
        _id: { $id: 'asdjvhjfahsd' }
      }]);
    }
  }
  class MockAuthService {
    authenticate() {
      return Observable.of({});
    }
    isAuthenticated() {
      return false;
    }
    logout(){

    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        SharedModule,
        FormsModule,
        RouterTestingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      providers: [
        { provide: AuthService, useClass: MockAuthService }

      ],
      declarations: [NavbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should log the user out', inject([AuthService], (authService: AuthService) => {
    spyOn(authService, 'logout');
    component.logout();
    expect(authService.logout).toHaveBeenCalled();
  }))
});
