import { Injectable } from '@angular/core';
//import { HttpService } from '../../../core/services/http.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public publicKey: any;
  private baseUrl = environment.baseUrl();
  

  constructor(private http: HttpClient) { }

  public login(credentials: string) {
    debugger
    //const encrypted: string = forge.util.encode64(this.isStatelessAuth ? credentials : this.publicKey.encrypt(credentials, 'RSA-OAEP'));
    return this.http.post(`${this.baseUrl}/user/val`, credentials);
  }


}
