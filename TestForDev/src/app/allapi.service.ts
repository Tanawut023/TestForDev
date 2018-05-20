import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AllapiService {

  constructor(private http: HttpClient) { }

  getTest(){
    return new Promise((resolve, reject)=> {
      this.http.get('http://uinames.com/api/?ext&amount=25' ).subscribe(res => {
        // console.log(res)
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  }

}
