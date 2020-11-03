import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginUsuario } from '../models/login-usuario';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login-model';
import { NuevoUsuario } from '../models/nuevo-usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

//cambiar
private authURL = 'http://localhost/apiapp/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(usuario: LoginUsuario): Observable<LoginModel> {
    return this.httpClient.post<LoginModel>(this.authURL + 'login', usuario);
  }

  public registro(usuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'registro', usuario);
  }

}
