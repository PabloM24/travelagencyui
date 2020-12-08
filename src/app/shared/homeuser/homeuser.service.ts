import { Homeuser } from './homeuser.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeuserService {

  userData: Homeuser;
  list: Homeuser[];

  readonly rootURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getUserDetails() {
    return this.http.get(this.rootURL + 'secure/user-info',
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }

  getUser() {
    this.http.get(this.rootURL + 'secure/user-info', {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') })
    }).toPromise().then(res => this.list = res as Homeuser[]);
  }

  putUser(userData: Homeuser) {
    return this.http.put(this.rootURL + 'secure/user-info', userData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  deleteUser() {
    return this.http.delete(this.rootURL + 'secure/user-info',
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

}
