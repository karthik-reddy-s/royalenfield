import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import{ HttpClient} from '@angular/common/http'
const API_URL=environment.apiURL;
const bike='/api/re';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get(`${API_URL}${bike}`);
  }
  createdata(bikes) {
    return this.httpClient.post(`${API_URL}${bike}`, bikes);
  }
  deletedata(id){
    return this.httpClient.delete(`${API_URL}${bike}/${id}`);

  }
}
