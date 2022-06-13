import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey = 'AIzaSyDxPQXpsZ8twFrTmZKKsHlxVi7Hbn-GANA';
  public userToken: string = '';
  
// crear usuarios
//  https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

//iniciar sesion
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]



  constructor( private http: HttpClient) { }

  public login(usuario: any) {
    const autData = {...usuario, returnSecureToken: true };
    return this.http.post(`${this.baseUrl}/accounts:signInWithPassword?key=${this.apiKey}`, autData);
  }

  private saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  private readToken() {
    if ( localStorage.getItem('token')) this.userToken = localStorage.getItem('token') || '';
    return this.userToken;
  }
}
