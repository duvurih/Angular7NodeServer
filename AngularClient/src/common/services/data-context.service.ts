import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map, catchError, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataContextService {

  localUrl: String = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  httpGet(url: string, parameters?: Object[], secure: boolean = true, fullUrl: boolean = false) {
    let observable: any;
    const headers = new HttpHeaders();
    this.addContentTypeHeader(headers, 1);
    this.addAcceptHeader(headers, 2);
    this.addAccessControlHeader(headers);
    if (fullUrl === false) {
      url = this.localUrl + url;
    }
    observable = this.http.get(url, { headers: headers }).pipe(map((response) => response));
    return observable;
  }

  async httpGetAsync(url: string, parameters?: Object[], secure: boolean = true, fullUrl: boolean = false) {
    let promise: any;
    const headers = new HttpHeaders();
    this.addContentTypeHeader(headers, 1);
    this.addAcceptHeader(headers, 2);
    this.addAccessControlHeader(headers);
    if (fullUrl === false) {
      url = this.localUrl + url;
    }
    promise = await this.http.get(url, { headers: headers }).toPromise();
    return promise;
  }

    httpPost(url: string, dataObject: any, fullUrl: boolean = false): Observable<any> {
      //   if (fullUrl === false) {
      //       url = `./${url}`;
      // }
      url = this.localUrl + url;
      const body = dataObject;
      const _headers = new HttpHeaders();
        _headers.append('Content-Type', 'application/json');
        // _headers.append("Access-Control-Allow-Origin", location.origin);
      const observable = this.http.post(url, body, { headers: _headers }).pipe(map(response => response));
        return observable;
    }

  httpPut(url: string, id: number, model: any): Observable<any> {
    url = this.localUrl + url;
    const body = JSON.stringify(model);
    const _headers = new HttpHeaders();
    _headers.append('Content-Type', 'application/json');
    // _headers.append("Access-Control-Allow-Origin", location.origin);
    const observable = this.http.put(url + id, body, { headers: _headers }).pipe(map(response => response));
    return observable;
  }

  httpDelete(url: string, id: number): Observable<any> {
    url = this.localUrl + url;
    const _headers = new HttpHeaders();
    _headers.append('Content-Type', 'application/json');
    // _headers.append("Access-Control-Allow-Origin", location.origin);
    const observable = this.http.delete(url + id, { headers: _headers }).pipe(map(response => response));
    return observable;
  }

  addSecurityHeader(headers: any): any {
    const token = JSON.parse(localStorage.getItem('currentUser')).token;
    headers.append('Authorization', `Bearer ${token}`);
    return headers;
  }

  addContentTypeHeader(headers: any, type: number = 0) {
    headers.append('Content-Type', (type === 1 ? 'application/x-www-form-urlencoded' : 'application/json'));
    return headers;
  }

  addAcceptHeader(headers, type: number = 0) {
    headers.append('Accept', (type === 2 ? '*/*' : (type === 1 ? 'application/xml' : 'application/json')));
  }

  composeUrl(url: string): string {
    url = url.indexOf('http') === 0 ? url : `./${url}`;
    return url.replace(/(http?:\/\/)|(\/)+/g, '$1$2');
  }

  addAccessControlHeader(headers: any): any {
    headers.append('Access-Control-Allow-Origin', this.composeUrl(`${location.origin}/${location.pathname}`));
    return headers;
  }
}
