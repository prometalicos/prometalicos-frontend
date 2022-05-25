import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-campus-create',
  templateUrl: './campus-create.component.html',
  styleUrls: ['./campus-create.component.scss']
})
export class CampusCreateComponent implements OnInit {
  public campusForm: FormGroup = this.fb.group({
    descripcion: ['', Validators.required],
    estado: [false, [Validators.required]]
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


}
