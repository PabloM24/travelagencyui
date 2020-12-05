import { Room } from './room.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  formData: Room;
  list: Room[];
  readonly rootURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getRoom() {
    this.http.get(this.rootURL + 'secure/room', { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) })
      .toPromise().then(res => this.list = res as Room[]);
  }

  postRoom(formData: Room) {
    return this.http.post(this.rootURL + 'secure/room', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  putRoom(formData: Room) {
    return this.http.put(this.rootURL + 'secure/room', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  deleteRoom(id: string) {
    return this.http.delete(this.rootURL + 'secure/room?id=' + id,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }
}
