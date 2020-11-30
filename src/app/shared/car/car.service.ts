import { Car } from './car.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  formData: Car;
  list: Car[];
  readonly rootURL = 'https://localhost:44321/api/Pelicula';

  constructor(private http: HttpClient) { }

  getMovie() {
    this.http.get(this.rootURL, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) })
      .toPromise().then(res => this.list = res as Car[]);
  }

  postMovie(formData: Car) {
    return this.http.post(this.rootURL, formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  putMovie(formData: Car) {
    return this.http.put(this.rootURL + '/' + formData.ID_Consecutivo, formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  deleteMovie(ID_Consecutivo: string) {
    return this.http.delete(this.rootURL + '/' + ID_Consecutivo,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }
}