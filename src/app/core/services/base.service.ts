import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService{

  constructor(
    protected _http: HttpClient,
    @Inject(String) protected _baseEndpoint: string
  ) { }

  save<T>(t: T, optionalEndpoint?: string): Observable<T | any> {
    this._baseEndpoint = optionalEndpoint ? optionalEndpoint : this._baseEndpoint;
    return this._http.post<T>(environment.apiUrl + this._baseEndpoint, t);
  }

  update<T>(id: number, t: T, optionalEndpoint?: string): Observable<T | any> {
    this._baseEndpoint = optionalEndpoint ? optionalEndpoint : this._baseEndpoint + "/" + id;
    return this._http.put<T>(environment.apiUrl + this._baseEndpoint, t, {});
  }

  findById<T>(id: number, optionalEndpoint?: string): Observable<T> {
    this._baseEndpoint = optionalEndpoint ? optionalEndpoint : this._baseEndpoint + "/" + id;
    return this._http.get<T>(environment.apiUrl + this._baseEndpoint);
  }

  findAll<T>(optionalEndpoint?: string): Observable<T> {
    this._baseEndpoint = optionalEndpoint ? optionalEndpoint : this._baseEndpoint;
    return this._http.get<T>(environment.apiUrl + this._baseEndpoint);
  }

  delete<T>(id: number, optionalEndpoint?: string): Observable<T | any> {
    this._baseEndpoint = optionalEndpoint ? optionalEndpoint : this._baseEndpoint + "/" + id;
    return this._http.delete<T>(environment.apiUrl + this._baseEndpoint);
	}
}
