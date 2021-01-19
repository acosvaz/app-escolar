import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginUsuario } from '../models/login-usuario';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login-model';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { NuevoCurso } from '../models/nuevo-curso';
import { Curso } from '../models/curso';
import { Ejercicio } from '../models/ejercicio';
import { Contenido } from '../models/contenido';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

//cambiar
private authURL = 'http://localhost/apiapp/auth/';
//private authURL = 'https://estres.denscode.com/apiapp/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(usuario: LoginUsuario): Observable<LoginModel> {
    return this.httpClient.post<LoginModel>(this.authURL + 'login', usuario);
  }

  public registro(usuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'registro', usuario);
  }

  public agregar_curso(nuevocurso: NuevoCurso): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'insertcurso', nuevocurso);
  }

  public cursos(id: string): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.authURL + `curso/${id}`);
  }

  public borrarcurso(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.authURL + `borrar/${id}`);
  }

  public uploadFormData(formData) {
    return this.httpClient.post<any>(this.authURL + 'upload', formData);
  }

  public subirFormData(formData) {
    return this.httpClient.post<any>(this.authURL + 'subir', formData);
  }

  public ejercicios(id: string): Observable<Ejercicio[]> {
    return this.httpClient.get<Ejercicio[]>(this.authURL + `ejercicio/${id}`);
  }

  public agregar_ejercicio(formData, id: string) {
    return this.httpClient.post<any>(this.authURL + `insertejercicio/${id}`, formData);
  }

  public borrarejercicio(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.authURL + `borrarejr/${id}`);
  }

  public contenidos(id: string): Observable<Contenido[]> {
    return this.httpClient.get<Contenido[]>(this.authURL + `contenido/${id}`);
  }

  public borrarcontenido(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.authURL + `borrarcont/${id}`);
  }

   public editaruno(id: string): Observable<any> {
    return this.httpClient.get<any>(this.authURL + `editaruno/${id}`);
  }

   public editardos(id: string): Observable<any> {
    return this.httpClient.get<any>(this.authURL + `editardos/${id}`);
  }

  public uploadFormDataEdit(formData) {
    return this.httpClient.post<any>(this.authURL + 'subireditar', formData);
  }

  public subirFormDataEdit(formData) {
    return this.httpClient.post<any>(this.authURL + 'uploadeditar', formData);
  }

}
