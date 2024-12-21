import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ResponseMail } from '../../../models/response-mail';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../enviorments/enviorment';
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

}
