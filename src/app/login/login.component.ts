import { RecaptchaFormsModule } from 'ng-recaptcha';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../shared/login/login.service';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

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
    //console.log(this.recaptcha);
  }

  auth2: any;

  @ViewChild('loginRef') loginElement: ElementRef;

  constructor(private login: LoginService, private route: Router, public zone: NgZone, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.login.userAuthentication(form.value).subscribe((data: any) => {
      if (JSON.stringify(data.Result) == 'true') {
        localStorage.setItem('userToken', JSON.parse(JSON.stringify(data.Token)));
        this.route.navigate(['/home']);
      } else {
        this.toastr.warning('Sign Error.', 'Try again!');
      }
    },
      (err: HttpErrorResponse) => {
        console.log(err)
        this.isLoggingError = true;
      });
  }

}
