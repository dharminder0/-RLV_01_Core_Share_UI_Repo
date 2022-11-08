import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor(private http: HttpClient) { }


  getDoctorsList(){
    let url: string = `Doctor/GetDoctors`;
    return this.http.get(url);

  }

}
