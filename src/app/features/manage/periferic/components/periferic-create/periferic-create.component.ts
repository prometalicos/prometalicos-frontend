import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, ViewContainerRef, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Periferic } from '../../../models/periferic.model';
import { Subsystem } from '../../../models/subsystem.model';
import { Periferic_type } from '../../../models/periferic_type.model';
import { ToasterComponent, ToasterPlacement } from '@coreui/angular-pro';
import { AppToastComponent } from '../../../../../shared-components/toasters/toast/components/toast.component';


@Component({
  selector: 'app-periferic-create',
  templateUrl: './periferic-create.component.html',
  styleUrls: ['./periferic-create.component.scss']
})
export class PerifericCreateComponent implements OnInit {
  @Input() deleteSuccess: boolean = false;
  @Input() editSuccess: boolean = false;
  @Input() saveSuccess: boolean = false;
  @Input() perifericList: Periferic[] = [];
  @Input() subsystemList: Subsystem[] = [];
  @Input() periferic_typeList: Periferic_type[] = [];
  @Output() savePeriferic: EventEmitter<Periferic> = new EventEmitter<Periferic>();
  @Output() editPeriferic: EventEmitter<Periferic> = new EventEmitter<Periferic>();
  @Output() deletePeriferic: EventEmitter<Periferic> = new EventEmitter<Periferic>();

  /*
  periferico_id: any,
    sub_sistema_id: any,
    nombre_sub_sistema: any,
    tipo_periferico_id: any,
    nombre_tipo_periferico: any,
    descripcion: any,
    marca: any,
    serial: any,
    modelo: any,
    voltaje: any, 
    numero_puertos: any,
    ip: any,
    puerto: any,
    ruta_ftp: any,
    ruta_ftp_http: any,
    tiempo_espera: any,
    estado: any
  */
  public columns = [
    { key: 'nombre_periferico', _style: { width: '20%' } },
    { key: 'nombre_sub_sistema', _style: { width: '10%' } },
    { key: 'nombre_tipo_periferico', _style: { width: '10%' } },
    { key: 'marca', _style: { width: '10%' } },
    { key: 'serial', _style: { width: '10%' } },
    { key: 'modelo', _style: { width: '10%' } },
    { key: 'voltaje', _style: { width: '10%' } },
    { key: 'numero_puertos', _style: { width: '10%' } },
    { key: 'ip', _style: { width: '10%' } },
    { key: 'puerto', _style: { width: '10%' } },
    { key: 'ruta_ftp', _style: { width: '10%' } },
    { key: 'ruta_ftp_http', _style: { width: '10%' } },
    { key: 'tiempo_espera', _style: { width: '10%' } },
    { key: 'estado', _style: { width: '10%' } },
    { key: 'acciones', label: 'Acciones', _style: { width: '15%' }, filter: false, sorter: false }
  ];

  public perifericForm: FormGroup;
  public subsystemSelect: Subsystem[] = [];
  public periferic_typeSelect: Periferic_type[] = [];
  public isEdition: boolean = false;
  public visible = false;
  public placement = ToasterPlacement.TopEnd;

  @ViewChild(ToasterComponent) toaster!: ToasterComponent;

  constructor(
    private fb: FormBuilder,
    private viewRef: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.subsystemList)this.subsystemActiveSelect();
    if(this.periferic_typeList)this.periferic_typeActiveSelect();
    if (this.editSuccess) {
      this.visible = false;
      this.addToast('periferico editado con éxito', 'success');
    }
    if (this.deleteSuccess) this.addToast('periferico eliminado con éxito', 'success');
    if (this.saveSuccess) {
      
      this.visible = false;
      this.addToast('tperiferico agregado con éxito', 'success');
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


  public initForm(item?: Periferic) {
    this.perifericForm = this.fb.group({
      periferico_id: [item && item.periferico_id || null],
      nombre_periferico: [item && item.nombre_periferico || '', [Validators.required]],
      nombre_sub_sistema: [item && item.nombre_sub_sistema || '', [Validators.required]],
      sub_sistema_id: [item && item.sub_sistema_id || null],
      nombre_tipo_periferico: [item && item.nombre_tipo_periferico || '', [Validators.required]],
      tipo_periferico_id: [item && item.tipo_periferico_id || null],
      marca: [item && item.marca || '', [Validators.required]],
      serial: [item && item.serial || '', [Validators.required]],
      modelo: [item && item.modelo || '', [Validators.required]],
      voltaje: [item && item.voltaje ||'', [Validators.required]],
      numero_puertos: [item && item.numero_puertos || '', [Validators.required]],
      ip: [item && item.ip || '', [Validators.required]],
      puerto: [item && item.puerto || '', [Validators.required]],
      ruta_ftp: [item && item.ruta_ftp || '', [Validators.required]],
      ruta_ftp_http: [item && item.ruta_ftp_http || '', [Validators.required]],
      tiempo_espera: [item && item.tiempo_espera || '', [Validators.required]],
      estado: [item && item.estado || false, [Validators.required]],
    })
  }

  public subsystemActiveSelect() {
    this.subsystemSelect = this.subsystemList.filter(subsystem => subsystem.estado === true);
  }

  public periferic_typeActiveSelect() {
    this.periferic_typeSelect = this.periferic_typeList.filter(periferic_type => periferic_type.estado === true);
  }

  public changeSubsystem(e) {
    const subsystemSelected = this.subsystemSelect.find(subsystem => subsystem.nombre_sub_sistema === e.target.value)
    this.perifericForm.get('sub_sistema_id').setValue(subsystemSelected.sub_sistema_id);
  }

  public changePeriferic_type(e) {
    const periferic_typeSelected = this.periferic_typeSelect.find(periferic_type => periferic_type.nombre_tipo_periferico === e.target.value)
    this.perifericForm.get('tipo_periferico_id').setValue(periferic_typeSelected.tipo_periferico_id);
  }

  public uniqueName(control: AbstractControl) {
    const idControlParent = control.parent && control.parent.value;
    const name = control.value;
    if (name && idControlParent) {
      if (this.perifericList.some(periferic => periferic.nombre_periferico.toLowerCase() === name.toLowerCase() && periferic.periferico_id !== idControlParent.periferico_id)) return { duplicated: true }
      return true;
    }
  }

  public saveForm(periferic: Periferic) {
    
    if (this.isEdition) this.editPeriferic.emit(periferic);
    
    else this.savePeriferic.emit(periferic);
  }

  public openPerifericModal(isEdition: boolean, item?: any) {
    this.initForm(item);
    this.visible = !this.visible;
    this.isEdition = isEdition;
  }

  public handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  public elementDelete(item: any) {
    this.deletePeriferic.emit(item);
  }

  public getCorrectError(control?) {
    if (control) {
      if (control?.errors && control.errors?.required) return 'Este campo no puede estar vacío';
      if (control.errors && control.errors.invalidCharacter) return 'Caracteres inválidos';
      if (control.errors && control.errors.duplicated) return 'El campo no puede estar duplicado';
    }
  }

  public numberValidation(event) {
    return event.charCode >= 48 && event.charCode <= 57
  }
}
