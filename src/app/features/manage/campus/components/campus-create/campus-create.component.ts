import { Component, Input, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Campus } from '../../../models/campus.model';
import { Concession } from '../../../models/concession.model';
import { ToasterPlacement, ToasterComponent } from '@coreui/angular-pro';
import { AppToastComponent } from '../../../../../shared-components/toasters/toast/components/toast.component';

@Component({
  selector: 'app-campus-create',
  templateUrl: './campus-create.component.html',
  styleUrls: ['./campus-create.component.scss']
})
export class CampusCreateComponent implements OnInit {
  @Input() campusList: Campus[] = [];
  @Input() concessionsList: Concession[] = [];
  @Input() saveSuccess: boolean = false;
  @Input() deleteSuccess: boolean = false;
  @Input() editSuccess: boolean = false;
  @Output() saveCampus: EventEmitter<Campus> = new EventEmitter<Campus>();
  @Output() editCampus: EventEmitter<Campus> = new EventEmitter<Campus>();
  @Output() deleteCampus: EventEmitter<Campus> = new EventEmitter<Campus>();

  public columns = [
    { key: 'nombre', _style: { width: '20%' } },
    { key: 'concesion_nombre', label: 'Concesión', _style: { width: '20%' } },
    { key: 'estado', _style: { width: '10%' } },
    { key: 'acciones', label: 'Acciones', _style: { width: '15%' }, filter: false, sorter: false }
  ];
  public isEdition: boolean = false;
  public visible = false;
  public campusForm: FormGroup;
  public concessionSelect: Concession[] = [];
  public placement = ToasterPlacement.TopEnd;

  @ViewChild(ToasterComponent) toaster!: ToasterComponent;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    
  }

  ngOnChanges() {
    if (this.concessionsList) this.concessionActiveSelect();
    if (this.editSuccess) {
      this.visible = false;
      this.addToast('Sede editada con éxito', 'success');
    }
    if (this.deleteSuccess) this.addToast('Sede eliminada con éxito', 'success');
    if (this.saveSuccess) {
      this.visible = false;
      this.addToast('Sede agregada con éxito', 'success');
    }
  }

  public addToast(title: string, color: string) {
    const options = {
      title: title,
      delay: 5000,
      placement: this.placement,
      color: color,
      autohide: true,
    }
    const componentRef = this.toaster.addToast(AppToastComponent, { ...options });
  }

  public initForm(item?: Campus) {
    this.campusForm = this.fb.group({
      sede_id: [item && item.sede_id || null],
      nombre: [item && item.nombre || '',[ Validators.required]],
      estado: [item && item.estado || false, [Validators.required]],
      concesion_nombre: [item && item.concesion_nombre || null, [Validators.required]],
      concesion_id: [item && item.concesion_id || null]
    });
  }

  public openCampusModal(isEdition: boolean, item?: any) {

    this.initForm(item);
    this.visible = !this.visible;
    this.isEdition = isEdition;
  }

  public concessionActiveSelect() {
    this.concessionSelect = this.concessionsList.filter(concession => concession.estado === true);
  }

  public getCorrectError(control?) {
    if (control) {
      if (control?.errors && control.errors?.required) return 'Este campo no puede estar vacío';
      if (control.errors && control.errors.invalidCharacter) return 'Caracteres inválidos';
      if (control.errors && control.errors.duplicated) return 'El campo no puede estar duplicado';
    }
  }

  public changeConcession(e) {
    const cencessionSelected = this.concessionSelect.find(concession => concession.nombre === e.target.value)
    this.campusForm.get('concesion_id').setValue(cencessionSelected.concesion_id);
  }

  public saveForm(campus: Campus) {
    if (this.isEdition) this.editCampus.emit(campus);
    else this.saveCampus.emit(campus);
  }

  public handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  public elementDelete(item: any) {
    this.deleteCampus.emit(item);
  }


}
