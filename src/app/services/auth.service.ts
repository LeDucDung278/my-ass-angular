import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser, typeLogin, TypeLoginResponse, typeSignup } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(data:typeLogin):  Observable<TypeLoginResponse> {
    return this.http.post<TypeLoginResponse>(environment.login,data)
  }
  signup(data:typeSignup):  Observable<typeSignup> {
    return this.http.post<typeSignup>(environment.signup,data)
  }
  listUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(environment.users)
  }
}
