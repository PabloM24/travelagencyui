import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  empty = [];
  readonly rootURL = environment.apiURL;
  constructor(private http: HttpClient, public zone: NgZone, public route: Router, private toastr: ToastrService) { }

  userAuthentication(userName, password) {
    console.log(userName + '' + password);
    var data = 'username=' + userName + '&password=' + password + '&grant_type=password';
    console.log(data);

    //var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded' });

    return this.http.post(this.rootURL + 'token', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  getUserDetails() {
    return this.http.get(this.rootURL + '/api/usuariosDetails',
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }
}
