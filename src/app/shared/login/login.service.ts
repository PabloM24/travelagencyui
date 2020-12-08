import { Homeuser } from './../homeuser/homeuser.model';
import { FormsModule } from '@angular/forms';
import { Login } from './login.model';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  formData: Login;

  empty = [];
  readonly rootURL = environment.apiURL;
  constructor(private http: HttpClient, public zone: NgZone, public route: Router, private toastr: ToastrService) { }

  userAuthentication(formData: Login) {
    return this.http.post(this.rootURL + 'authenticate', formData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  getUserDetails() {
    return this.http.get(this.rootURL + 'secure/user-info',
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }


}
