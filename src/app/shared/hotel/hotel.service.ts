import { Hotel } from './hotel.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  formData: Hotel;
  list: Hotel[];
  readonly rootURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getHotel() {
    this.http.get(this.rootURL, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) })
      .toPromise().then(res => this.list = res as Hotel[]);
  }

  postHotel(formData: Hotel) {
    return this.http.post(this.rootURL, formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  putHotel(formData: Hotel) {
    return this.http.put(this.rootURL + '/' + formData.ID_Consecutivo, formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  deleteHotel(ID_Consecutivo: string) {
    return this.http.delete(this.rootURL + '/' + ID_Consecutivo,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });

  }
}
