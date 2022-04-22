import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  public login(user: string){
    this.authService.login(user).subscribe( resp =>{
      console.log(resp)

    }, (err) => {
      console.log(err.error.error.message)
    })
    
  }

}
