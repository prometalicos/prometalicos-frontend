
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Campus } from '../../../models/campus.model';
import { Subsystem } from '../../../models/subsystem.model';
import { ToasterPlacement, ToasterComponent } from '@coreui/angular-pro';
import { AppToastComponent } from '../../../../../shared-components/toasters/toast/components/toast.component';
import { Component, Input, OnInit, EventEmitter, Output, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-subsystem-create',
  templateUrl: './subsystem-create.component.html',
  styleUrls: ['./subsystem-create.component.scss']
})
export class SubsystemCreateComponent implements OnInit, OnChanges {

  @Input() subsystemList: Subsystem[] = [];
  @Input() campusList: Campus[] = [];
  @Input() saveSuccess: boolean = false;
  @Input() deleteSuccess: boolean = false;
  @Input() editSuccess: boolean = false;
  @Output() saveSubsystem: EventEmitter<Subsystem> = new EventEmitter<Subsystem>();
  @Output() editSubsystem: EventEmitter<Subsystem> = new EventEmitter<Subsystem>();
  @Output() deleteSubsystem: EventEmitter<Subsystem> = new EventEmitter<Subsystem>();

  public columns = [
    { key: 'nombre', _style: { width: '20%' } },
    { key: 'sede_nombre', label: 'Sede', _style: { width: '20%' } },
    { key: 'estado', _style: { width: '10%' } },
    { key: 'acciones', label: 'Acciones', _style: { width: '15%' }, filter: false, sorter: false }
  ];
  public isEdition: boolean = false;
  public visible = false;
  public subsystemForm: FormGroup;
  public campusSelect: Campus[] = [];
  public placement = ToasterPlacement.TopEnd;

  @ViewChild(ToasterComponent) toaster!: ToasterComponent;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges() {
    if (this.campusList) this.campusActiveSelect();
    if (this.editSuccess) {
      this.visible = false;
      this.addToast('Subsistema editada con éxito', 'success');
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

  public initForm(item?: Subsystem) {
    this.subsystemForm = this.fb.group({
      subsystem_id: [item && item.sub_sistema_id || null],
      nombre_sub_sistema: [item && item.nombre_sub_sistema || '', [Validators.required]],
      estado: [item && item.estado || false, [Validators.required]],
      sede_nombre: [item && item.sede_nombre || null, [Validators.required]],
      sede_id: [item && item.sede_id || null]
    });
  }

  public openSubsystemModal(isEdition: boolean, item?: any) {
    this.initForm(item);
    this.visible = !this.visible;
    this.isEdition = isEdition;
  }

  public campusActiveSelect() {
    this.campusSelect = this.campusList.filter(campus => campus.estado === true);
  }

  public getCorrectError(control?) {
    if (control) {
      if (control?.errors && control.errors?.required) return 'Este campo no puede estar vacío';
      if (control.errors && control.errors.invalidCharacter) return 'Caracteres inválidos';
      if (control.errors && control.errors.duplicated) return 'El campo no puede estar duplicado';
    }
  }

  public changeCampus(e) {
    const campusSelected = this.campusSelect.find(campus => campus.nombre_sede === e.target.value)
    this.subsystemForm.get('sede_id').setValue(campusSelected.sede_id);
  }

  public saveForm(subsystem: Subsystem) {
    if (this.isEdition) this.editSubsystem.emit(subsystem);
    else this.saveSubsystem.emit(subsystem);
  }

  public handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  public elementDelete(item: any) {
    this.deleteSubsystem.emit(item);
  }
}
