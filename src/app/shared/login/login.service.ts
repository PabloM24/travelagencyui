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

  userAuthentication(username, password) {
    console.log(username + '' + password);
    //var data = 'username=' + username + '&password=' + password + '&grant_type=password';
    var data = 'grant_type=' + '&username=' + username + '&password=' + password + '&scope=client_id=&client_secret=';
    console.log(data);

    //var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded' 'application/json' });

    return this.http.post(this.rootURL + 'token', data, { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded' }) });
  }

  getUserDetails() {
    return this.http.get(this.rootURL + '/api/usuariosDetails',
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }
}
