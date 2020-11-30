import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from './register.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  formData: Register;


  list: Register[];
  readonly rootURL = environment.apiURL;

  getUser() {
    this.http.get(this.rootURL + '/Usuarios', {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') })
    }).toPromise().then(res => this.list = res as Register[]);
  }

  postUser(formData: Register) {
    return this.http.post(this.rootURL + '/Usuarios', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  putUser(formData: Register) {
    return this.http.put(this.rootURL + '/Usuarios/' + formData.ID_usuario, formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  deleteUser(ID_Consecutivo: string) {
    return this.http.delete(this.rootURL + '/Usuarios/' + ID_Consecutivo,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }

}