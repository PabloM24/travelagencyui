import { Reservation } from './reservation.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  formData: Reservation;
  list: Reservation[];
  readonly rootURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getReservation() {
    this.http.get(this.rootURL + 'secure/reservation', { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) })
      .toPromise().then(res => this.list = res as Reservation[]);
  }

  postReservation(formData: Reservation) {
    return this.http.post(this.rootURL + 'secure/reservation', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  putReservation(formData: Reservation) {
    return this.http.put(this.rootURL + 'secure/reservation', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  deleteReservation(id: string) {
    return this.http.delete(this.rootURL + 'secure/reservation?id=' + id,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }
}
