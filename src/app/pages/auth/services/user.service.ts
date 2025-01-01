import { Injectable } from '@angular/core';
import {  catchError, map, Observable, of, throwError } from 'rxjs';
import { ResponseMail } from '../interfaces/response-mail';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../enviorments/enviorment';
import { Login } from '../interfaces/login';
import { Authorize } from '../interfaces/authorize';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { }

  public checkMail(email : string) : Observable<ResponseMail> {
    const queryParams = new HttpParams().append('email', email);
    return this.httpClient
    .get<ResponseMail>(`${environment.baseUrl}/api/login/login`, {
      params : queryParams
    });
  }

  public register(registro : ResponseMail) : Observable<ResponseMail>{
    return this.httpClient.post<ResponseMail>(`${environment.baseUrl}/api/login/create`, registro)
    .pipe(catchError(error =>  {
      return of(error.error as ResponseMail);
    }));
  }

  public confirm(id : string) : Observable<boolean>{
    return this.httpClient.get<ResponseMail>(`${environment.baseUrl}/api/login/login/confirm/${id}`)
    .pipe(map(() => true),
    catchError(() =>  throwError(false))
    );
  }

  public sendReset(value: string) {
    return this.httpClient.post<ResponseMail>(`${environment.baseUrl}/api/login/reset`, value)
    .pipe(catchError(error =>  {
      return of(error.error as ResponseMail);
    }));  
  }

  login(login: Login) : Observable<Authorize> {
    return this.httpClient.post<Authorize>(`${environment.baseUrl}/api/login/login`, login);
  }

}
