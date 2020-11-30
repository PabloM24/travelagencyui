import { RecaptchaFormsModule } from 'ng-recaptcha';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../shared/login/login.service';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggingError: boolean = false;

  empty = [];
  recaptcha: any[];

  resolved(captchaResponse: any[]) {
    this.recaptcha = captchaResponse;
    console.log(this.recaptcha);
  }

  auth2: any;

  @ViewChild('loginRef') loginElement: ElementRef;

  constructor(private login: LoginService, private route: Router, public zone: NgZone, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(userName, password) {
    this.login.userAuthentication(userName, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      localStorage.setItem('user', JSON.stringify({ usuario: userName, password: password }));
      this.route.navigate(['/home']);
    },
      (err: HttpErrorResponse) => {
        console.log(err)
        this.isLoggingError = true;
      });
  }

}
