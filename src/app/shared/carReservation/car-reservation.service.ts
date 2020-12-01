import { CarReservation } from './car-reservation.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarReservationService {
  formData: CarReservation;
  list: CarReservation[];
  readonly rootURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getCarReservation() {
    this.http.get(this.rootURL, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) })
      .toPromise().then(res => this.list = res as CarReservation[]);
  }

  postCarReservation(formData: CarReservation) {
    return this.http.post(this.rootURL, formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  putCarReservation(formData: CarReservation) {
    return this.http.put(this.rootURL + '/' + formData.ID_Consecutivo, formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  deleteCarReservation(ID_Consecutivo: string) {
    return this.http.delete(this.rootURL + '/' + ID_Consecutivo,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }
}
