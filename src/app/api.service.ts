import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthenticationService} from './auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  get(path: string, params?: HttpParams) {
    return this.http.get<any>(this.getHost() + path, {params});
  }

  post(path: string, data?: object, params?: HttpParams) {
    return this.http.post<any>(this.getHost() + path, data, {params});
  }

  put(path: string, data?: object, params?: HttpParams) {
    return this.http.put<any>(this.getHost() + path, data, {params});
  }

  delete(path: string, params?: HttpParams) {
    return this.http.delete<any>(this.getHost() + path, {params});
  }

  getHost(): string {
    return this.authenticationService.currentUserValue.apiServer + '/';
  }

}

export class Resp {
  status: string;
  data: object;
}
