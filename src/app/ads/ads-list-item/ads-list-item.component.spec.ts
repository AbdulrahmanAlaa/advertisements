import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsListItemComponent } from './ads-list-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app.module';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs/Observable';

describe('AdsListItemComponent', () => {
  let component: AdsListItemComponent;
  let fixture: ComponentFixture<AdsListItemComponent>;
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
    logout() {

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
      declarations: [AdsListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
