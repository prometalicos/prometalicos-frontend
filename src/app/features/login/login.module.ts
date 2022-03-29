import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
