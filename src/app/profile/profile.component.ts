import { Router } from '@angular/router';
import { HomeuserService } from './../shared/homeuser/homeuser.service';
import { Homeuser } from './../shared/homeuser/homeuser.model';
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
  identification: string;
  first_name: string;
  last_name: string;
  second_last_name: string;
  email: string;
  birthday: Date;
  phone: string;

  constructor(private router: Router, public service: HomeuserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getUserDetails().subscribe((data: Homeuser) => {

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

  getInfo(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.userData = {

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
    this.updateRecord(form);
    console.log('Usuario actualizado correctamente!');
  }

  updateRecord(form: NgForm) {
    this.service.putUser(form.value).subscribe(res => {
      this.toastr.success('User update successfully.', 'Great!');
      this.service.getUser();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Error!', 'Update error');
    });
  }

  onDelete() {
    if (confirm('Are you sure you want to delete your account?')) {
      this.service.deleteUser().subscribe(res => {
        this.toastr.warning('User deleted successfully.', 'Careful!');
        localStorage.removeItem('userToken');
        this.router.navigate(['/login']);
      }, (err: HttpErrorResponse) => {
        console.log(err);
        this.toastr.warning('Delete Error! ' + err);
      });
    }
  }


}
