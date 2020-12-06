import { RoomReservation } from './room-reservation.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomReservationService {

  formData: RoomReservation;
  list: RoomReservation[];
  readonly rootURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getRoomReservation() {
    this.http.get(this.rootURL + 'secure/room-reservation', { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) })
      .toPromise().then(res => this.list = res as RoomReservation[]);
  }

  postRoomReservation(formData: RoomReservation) {
    return this.http.post(this.rootURL + 'secure/room-reservation', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  putRoomReservation(formData: RoomReservation) {
    return this.http.put(this.rootURL + 'secure/room-reservation', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  deleteRoomReservation(id: string) {
    return this.http.delete(this.rootURL + 'secure/room-reservation?id=' + id,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }
}
