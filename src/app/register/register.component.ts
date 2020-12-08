import { RegisterService } from './../shared/register/register.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../shared/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoggingError: boolean = false;
  auth2: any;

  @ViewChild('loginRef') loginElement: ElementRef;

  constructor(private login: LoginService, private route: Router, public zone: NgZone,
    private toastr: ToastrService, public service: RegisterService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {

      username: '',
      password: '',
      identification: '',
      first_name: '',
      last_name: '',
      second_last_name: '',
      email: '',
      birthday: null,
      phone: ''
    };
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
    console.log('Usuario Ingresado correctamente!');
  }

  insertRecord(form: NgForm) {
    this.service.postUser(form.value).subscribe(res => {
      this.toastr.success('User created successfully.', 'Great!');
      this.resetForm(form);
      this.service.getUser();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Sign Error!', 'User already exists!');
    });
  }

}
