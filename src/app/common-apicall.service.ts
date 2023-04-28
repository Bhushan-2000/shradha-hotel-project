import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApicallService {
  endPoint: any;
  backJourney: any;
  Data: any;
  ownerName: any;
  url = 'http://localhost:3000/';
  signInOrUp: any;
  hotelDetailsList: any;
  editId!: number;
  editJourney: boolean = false;
  hotelDetailsById: any;
  constructor(private httpClient: HttpClient) { }


  postApiCall(endpoint: any, data: any) {
    let updateUrl = this.url + endpoint;
    return this.httpClient.post(updateUrl, data)
  }


  getApiCall(endPoint: any, id?: any) {
    let updateUrl = id ? this.url + endPoint + '/' + id : this.url + endPoint;
    return this.httpClient.get(updateUrl);
  }


  deleteApiCall(endPoint: any, id: Number) {
    let updateUrl = this.url + endPoint + '/' + id;
    return this.httpClient.delete(updateUrl);
  }

  patchApiCall(endPoint: any, data: any, id?: any) {
    let updateUrl = this.url + endPoint + '/' + id;
    return this.httpClient.patch(updateUrl, data)
  }

}