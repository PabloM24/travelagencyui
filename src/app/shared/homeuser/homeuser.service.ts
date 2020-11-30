import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeuserService {

  readonly rootURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getUserDetails() {
    return this.http.get(this.rootURL + '/api/GetUserDetails',
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }
}
