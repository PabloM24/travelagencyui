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
    this.http.get(this.rootURL + 'secure/hotel', { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) })
      .toPromise().then(res => this.list = res as Hotel[]);
    console.log(localStorage.getItem('userToken'));
  }

  postHotel(formData: Hotel) {
    return this.http.post(this.rootURL + 'secure/hotel', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  putHotel(formData: Hotel) {
    return this.http.put(this.rootURL + 'secure/hotel', formData,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  sendbody(id: string) {
    const options = {

    }
  }

  deleteHotel(id: string) {
    return this.http.delete(this.rootURL + 'secure/hotel/' + id,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

}
