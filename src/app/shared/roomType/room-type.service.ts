import { RoomType } from './room-type.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  formData: RoomType;
  list: RoomType[];
  readonly rootURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getRoomType() {
    this.http.get(this.rootURL + 'secure/room-type', { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) })
      .toPromise().then(res => this.list = res as RoomType[]);
  }

  postRoomType(formData: RoomType) {
    return this.http.post(this.rootURL + 'secure/room-type', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  putRoomType(formData: RoomType) {
    return this.http.put(this.rootURL + 'secure/room-type', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  deleteRoomType(id: string) {
    return this.http.delete(this.rootURL + 'secure/room-type?id=' + id,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }
}
