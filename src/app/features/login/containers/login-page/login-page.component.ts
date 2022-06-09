import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared-features/auth.service';
import { LoginService } from '../../services/login.service';
import { INavData } from '@coreui/angular-pro';
import { first, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public returnUrl: string = '';
  public queryParams: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  this.queryParams = { ...this.route.snapshot.queryParams }
  
  }


  public login(credentials: string){
    this.loginService.login(credentials).subscribe((res: any) => {
      console.log(res);
      this.router.navigate([this.returnUrl], { queryParams: this.queryParams });
    })
  }

}
