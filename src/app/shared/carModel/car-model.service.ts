import { CarModel } from './car-model.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarModelService {

  formData: CarModel;
  list: CarModel[];
  readonly rootURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getCarModel() {
    this.http.get(this.rootURL + 'secure/car-model', { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) })
      .toPromise().then(res => this.list = res as CarModel[]);
  }

  postCarModel(formData: CarModel) {
    return this.http.post(this.rootURL + 'secure/car-model', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  putCarModel(formData: CarModel) {
    return this.http.put(this.rootURL + 'secure/car-model', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  deleteCarModel(id: string) {
    return this.http.delete(this.rootURL + 'secure/car-model?id=' + id,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }
}
