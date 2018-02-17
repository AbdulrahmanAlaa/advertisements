import { Observable } from 'rxjs/Observable';
import { AdsListItemComponent } from './../ads-list-item/ads-list-item.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsListComponent } from './ads-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app.module';
import { SharedModule } from '../../shared/shared.module';
import { AdvService } from '../../shared/services/adv.service';

describe('AdsListComponent', () => {
  let component: AdsListComponent;
  let fixture: ComponentFixture<AdsListComponent>;
//Mocking Services
class MockAdvService{
  getAll(){
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
      providers:[
        {provide:AdvService,useClass:MockAdvService}
      ],
      declarations: [AdsListComponent, AdsListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
