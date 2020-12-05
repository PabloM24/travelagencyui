import { Car } from './car.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  formData: Car;
  list: Car[];
  readonly rootURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getCar() {
    this.http.get(this.rootURL + 'secure/car', { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) })
      .toPromise().then(res => this.list = res as Car[]);
  }

  postCar(formData: Car) {
    return this.http.post(this.rootURL + 'secure/car', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  putCar(formData: Car) {
    return this.http.put(this.rootURL + 'secure/car', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  deleteCar(id: string) {
    return this.http.delete(this.rootURL + 'secure/car?id=' + id,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }
}