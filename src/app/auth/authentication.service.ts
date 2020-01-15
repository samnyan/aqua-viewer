import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(accessCode: string, server: string) {
    return this.http.post<any>(server + '/' + 'api/sega/aime/getByAccessCode', {accessCode})
      .pipe(
        map(
          resp => {
            if (resp && resp.extId) {
              const user = new User(resp.extId, server);
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;
            }
          }
        )
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}

export class User {
  extId: number;
  apiServer: string;

  constructor(extId: number, apiServer: string) {
    this.extId = extId;
    this.apiServer = apiServer;
  }
}
