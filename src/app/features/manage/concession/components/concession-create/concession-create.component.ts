import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Concession } from '../../../models/concession.model';

@Component({
  selector: 'app-concession-create',
  templateUrl: './concession-create.component.html',
  styleUrls: ['./concession-create.component.scss']
})
export class ConcessionCreateComponent implements OnInit {
  @Output() saveConcession: EventEmitter<Concession> = new EventEmitter<Concession>();
  public concessionForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    direccion: ['', [Validators.required]],
    telefono_contacto: ['', [Validators.required]],
    correo_e: ['', [Validators.required]],
    url : ['', [Validators.required]],
    estado: [false, [Validators.required]],

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public saveForm(concession: Concession) {
    concession.estado = concession.estado === true ? 1 : 2;
    this.saveConcession.emit(concession);
  }

}
