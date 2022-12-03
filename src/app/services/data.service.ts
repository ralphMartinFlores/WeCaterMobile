import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DataService {

    // Variable Initialization
    data: any;

    constructor(private http: HttpClient) { }

    // URL of API
    baseUrl = "http://192.168.100.5/wecaterAPI/";

    sendApiRequest(method, data) {
      return <any> (
        this.http.post(this.baseUrl + method, btoa(JSON.stringify(data)))
      );
    }   
}
