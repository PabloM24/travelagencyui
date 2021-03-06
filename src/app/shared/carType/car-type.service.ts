import { CarType } from './car-type.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarTypeService {

  formData: CarType;
  list: CarType[];
  readonly rootURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getCarType() {
    this.http.get(this.rootURL + 'secure/car-type', { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) })
      .toPromise().then(res => this.list = res as CarType[]);
  }

  postCarType(formData: CarType) {
    return this.http.post(this.rootURL + 'secure/car-type', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  putCarType(formData: CarType) {
    return this.http.put(this.rootURL + 'secure/car-type', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  deleteCarType(id: string) {
    return this.http.delete(this.rootURL + 'secure/car-type?id=' + id,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }
}