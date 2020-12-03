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
  ID_Usuario: string;
  userName: string;
  Correo_electronico: string;
  Nombre: string;
  Apellido: string;
  Segundo_apellido: string;

  constructor(private update: LoginService, public service: RegisterService, private toastr: ToastrService) { }

  ngOnInit() {
    if (this.user != null) {
      this.update.getUserDetails().subscribe((data: Homeuser) => {
        this.ID_Usuario = data.ID_usuario;
        this.userName = data.Nombre;
        this.Correo_electronico = data.Correo_electronico;
        this.Nombre = data.Nombre;
        this.Apellido = data.Apellido;
        this.Segundo_apellido = data.Segundo_apellido;
        this.getInfo();
      });
    }
  }

  get userFacebook(): any {
    return JSON.parse(localStorage.getItem('userFacebook'));
  }

  get userGoogle(): any {
    return JSON.parse(localStorage.getItem('userGoogle'));
  }

  get user(): any {
    return JSON.parse(localStorage.getItem('user'));
  }

  getInfo(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      Apellido: this.Apellido,
      Correo_electronico: this.Correo_electronico,
      Nombre: this.Nombre,
      Nombre_usuario: this.userName,
      Segundo_apellido: this.Segundo_apellido,
      Contrasenna: '',
      ID_usuario: this.ID_Usuario
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
