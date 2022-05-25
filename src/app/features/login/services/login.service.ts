import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { environment } from '../../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public publicKey: any;
  private baseUrl = environment.baseUrl();
  

  constructor(private http: HttpService) { }

  public login(credentials: string) {
    //const encrypted: string = forge.util.encode64(this.isStatelessAuth ? credentials : this.publicKey.encrypt(credentials, 'RSA-OAEP'));
    return this.http.doPost(`${this.baseUrl}/user/val`, credentials);
  }


}
