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

  async login(api: string, loginParams: object) {
    const res = new Promise((resolve) => {
      this.http.post('/api/login/', loginParams).subscribe(res => {
        console.log(res);
        resolve(res);
      });
    });
    return await res;
  }

  async logout() {
    const res = new Promise((resolve) => {
      this.http.get('/api/logout/').subscribe(res => {
        console.log(res);
        resolve(res);
      });
    });
    return await res;
  }

  getProblemTag() {
    this.http.get('/api/problemtag/').subscribe(res => {
      console.log(res);
    });
  }

  async getProblems() {
    const res = new Promise((resolve) => {
      this.http.get('/api/problemdata/?auth=1&oj=LPOJ').subscribe((res: any) => {
        resolve(res);
      });
    });
    return await res;
  }

  async getProblemData(pid: string) {
    const res = new Promise((resolve) => {
      this.http.get(`/api/problem/${pid}/`).subscribe((res: any) => {
        console.log(res);
        resolve(res);
      });
    });
    return await res;
  }

}
