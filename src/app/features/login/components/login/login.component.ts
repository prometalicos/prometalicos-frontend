import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() onSubmitCredentials: EventEmitter<any> = new EventEmitter<any>();

  public loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
   
  }

  ngOnChanges() {
  }


  public logIn(user: any) {
    this.onSubmitCredentials.emit(user);
  }

}
