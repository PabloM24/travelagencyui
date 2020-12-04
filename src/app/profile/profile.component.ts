import { Homeuser } from './../shared/login/homeuser.model';
import { Register } from './../shared/register/register.model';
import { RegisterService } from './../shared/register/register.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './../shared/login/login.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

declare var ID_usuario: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails: Homeuser;
  username: string;
  password: string;
  identification: string;
  first_name: string;
  last_name: string;
  second_last_name: string;
  email: string;
  birthday: Date;
  phone: string;

  constructor(private update: LoginService, public service: RegisterService, private toastr: ToastrService) { }

  ngOnInit() {
    if (this.user != null) {
      this.update.getUserDetails().subscribe((data: Homeuser) => {
        this.username = data.username;
        this.password = data.password;
        this.identification = data.identification;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.second_last_name = data.second_last_name;
        this.email = data.email;
        this.birthday = data.birthday;
        this.phone = data.phone;
        this.getInfo();
      });
    }
  }

  get user(): any {
    return JSON.parse(localStorage.getItem('user'));
  }

  getInfo(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {

      username: this.username,
      password: this.password,
      identification: this.identification,
      first_name: this.first_name,
      last_name: this.last_name,
      second_last_name: this.second_last_name,
      email: this.email,
      birthday: this.birthday,
      phone: this.phone

    };
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
    console.log('Usuario actualizado correctamente!');
  }

  insertRecord(form: NgForm) {
    this.service.putUser(form.value).subscribe(res => {
      this.toastr.success('User update successfully.', 'Great!');
      this.service.getUser();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Sign Error!', 'Error Update');
    });
  }

}
