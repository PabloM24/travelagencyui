import { CarBrand } from './car-brand.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarBrandService {
  formData: CarBrand;
  list: CarBrand[];
  readonly rootURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getCarBrand() {
    this.http.get(this.rootURL, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) })
      .toPromise().then(res => this.list = res as CarBrand[]);
  }

  postCarBrand(formData: CarBrand) {
    return this.http.post(this.rootURL, formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  putCarBrand(formData: CarBrand) {
    return this.http.put(this.rootURL + '/' + formData.ID_Consecutivo, formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  deleteCarBrand(ID_Consecutivo: string) {
    return this.http.delete(this.rootURL + '/' + ID_Consecutivo,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }
}