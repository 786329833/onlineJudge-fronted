import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable({
  providedIn: 'root'
})
export class HttpRequireService {

  constructor(
    private http: HttpClient
  ) { }

  chooseDB() {
    // const promise = new Promise((resolve, reject) => {
    //   resolve(this.http.get('/api/chooseDB'));
    // });
    // return await promise;
    this.http.get('/api/chooseDB').subscribe(res => {
      console.log(res);
    });
  }

  register(api: string, registerParams: object) {
    this.http.post('/api/' + api, registerParams).subscribe(res => {
      console.log(res);
    });
  }

  login(api: string, registerParams: JSON) {
    this.http.post('/api/' + api, registerParams).subscribe(res => {
      console.log(res);
    });
  }

}
