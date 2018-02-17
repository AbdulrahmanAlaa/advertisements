import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '../../app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../shared/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  //Mocking Services
  class MockAuthService {
    authenticate (){
      return Observable.of({});
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
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
        TranslateService,
        { provide: AuthService, useClass: MockAuthService }

      ],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initiate component', () => {
    expect(component).toBeTruthy();
  });
  it('should log the user in', inject([Router], (router: Router) => {
    spyOn(router, 'navigate')
    component.loginForm.setValue({ username: 'abdo', password: 'P@ssw0rd', rememberMe: false })
    component.login();
    expect(router.navigate).toHaveBeenCalled();
  }));


});
