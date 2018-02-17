import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './navbar/navbar.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpLoaderFactory } from './app.module';
import { StorageService } from './shared/services/storage.service';
import { AuthService } from './shared/services/auth.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    //Mocking Services
    class MockStorageService {
      public state: {};
    }
    class MockAuthService {

    }

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      providers: [
        TranslateService,
        { provide: StorageService, useClass: MockStorageService },
        { provide: AuthService, useClass: MockAuthService }
      ],
      declarations: [
        AppComponent, NavbarComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
