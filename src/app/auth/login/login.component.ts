import { Component,  trigger, state, style, transition, animate, OnDestroy } from '@angular/core';

import * as JsonQuery from 'jsonpath/jsonpath';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { config } from '../../shared/utilities/pages-config';

@Component({
  selector: 'adv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('loginAnimations', [
      state('small', style({
        transform: 'scale(0)'
      })),
      state('large', style({
        transform: 'scale(1)'
      })),
      transition('small => large', animate('300ms ease-in'))
    ])
  ]
})
export class LoginComponent implements OnDestroy {
  /** holds all from inputs */
  loginForm: FormGroup;
  /** this variable holds the login Error Messages from server   */
  error: string;
  /** this variable holds data used in routing after login where he came from  */
  returnUrl: string;
  /** this variable holds data used in animation  */
  state: string = 'small';
  /**
   * holds subscription info
   */
  sub: Subscription;
  /**
   * parameters passed by angular Dependency Injection
   * @param formBuilder 
   * @param router 
   * @param authService 
   * @param activeRoute 
   */
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private activeRoute: ActivatedRoute
  ) {
    //used to scale the Login Screen up
    setTimeout(() => {
      this.state = (this.state === 'small') ? 'large' : 'small';
    }, 400);

    //To get the returnUrl from queryString
    this.sub = this.activeRoute.queryParams.subscribe((params:Params) => {
      this.returnUrl = params["returnUrl"] || "";
    });
    //defining the form inputs using Model Driven Forms 
    this.loginForm = formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: false
    })
  }


  /**
   * Authonticate the user using AuthService passing username and password 
   */
  login() {
    this.authService.authenticate(this.loginForm.value.username, this.loginForm.value.password, this.loginForm.value.rememberMe).subscribe(response => {
      const url = this.returnUrl || config.advertisements.route;
      this.router.navigate([url]);
    });
  }

  /**
   * Remove all references for subscription in Memory
   */
  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
