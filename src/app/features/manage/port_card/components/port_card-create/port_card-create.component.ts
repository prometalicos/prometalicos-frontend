import { Component, Input, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Port_card } from '../../../models/port_card.model';
import { Periferic } from '../../../models/periferic.model';
import { ToasterPlacement, ToasterComponent } from '@coreui/angular-pro';
import { AppToastComponent } from '../../../../../shared-components/toasters/toast/components/toast.component';

@Component({
  selector: 'app-port_card-create',
  templateUrl: './port_card-create.component.html',
  styleUrls: ['./port_card-create.component.scss']
})
export class Port_cardCreateComponent implements OnInit {
  @Input() port_cardList: Port_card[] = [];
  @Input() perifericList: Periferic[] = [];
  @Input() saveSuccess: boolean = false;
  @Input() deleteSuccess: boolean = false;
  @Input() editSuccess: boolean = false;
  @Output() savePort_card: EventEmitter<Port_card> = new EventEmitter<Port_card>();
  @Output() editPort_card: EventEmitter<Port_card> = new EventEmitter<Port_card>();
  @Output() deletePort_card: EventEmitter<Port_card> = new EventEmitter<Port_card>();

  
  public columns = [
    { key: 'nombre_tarjeta_puertos', _style: { width: '20%' } },
    { key: 'nombre_periferico', label: 'Periferico', _style: { width: '20%' } },
    { key: 'puerto', _style: { width: '10%' } },
    { key: 'ip', _style: { width: '10%' } },
    { key: 'tipo', _style: { width: '10%' } },
    { key: 'estado', _style: { width: '10%' } },
    { key: 'acciones', label: 'Acciones', _style: { width: '15%' }, filter: false, sorter: false }
  ];
  public isEdition: boolean = false;
  public visible = false;
  public port_cardForm: FormGroup;
  public perifericSelect: Periferic[] = [];
  public placement = ToasterPlacement.TopEnd;

  @ViewChild(ToasterComponent) toaster!: ToasterComponent;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    
  }

  ngOnChanges() {
    if (this.perifericList) this.perifericActiveSelect();
    if (this.editSuccess) {
      this.visible = false;
      this.addToast('puerto editado con éxito', 'success');
    }
    if (this.deleteSuccess) this.addToast('puerto eliminado con éxito', 'success');
    if (this.saveSuccess) {
      this.visible = false;
      this.addToast('puerto agregado con éxito', 'success');
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

  public initForm(item?: Port_card) {
    this.port_cardForm = this.fb.group({
      tarjeta_puertos_id: [item && item.tarjeta_puertos_id || null],
      puerto: [item && item.puerto || null],
      nombre_tarjeta_puertos: [item && item.nombre_tarjeta_puertos || null],
      tipo: [item && item.tipo || null],
      ip: [item && item.ip || '',[ Validators.required]],
      estado: [item && item.estado || false, [Validators.required]],
      nombre_periferico: [item && item.nombre_periferico || null, [Validators.required]],
      periferico_id: [item && item.periferico_id || null]
    });
  }

  public openPort_cardModal(isEdition: boolean, item?: any) {

    this.initForm(item);
    this.visible = !this.visible;
    this.isEdition = isEdition;
  }

  public perifericActiveSelect() {
    this.perifericSelect = this.perifericList.filter(periferic => periferic.estado === true);
  }

  public getCorrectError(control?) {
    if (control) {
      if (control?.errors && control.errors?.required) return 'Este campo no puede estar vacío';
      if (control.errors && control.errors.invalidCharacter) return 'Caracteres inválidos';
      if (control.errors && control.errors.duplicated) return 'El campo no puede estar duplicado';
    }
  }

  public changePeriferic(e) {
    const perifericSelected = this.perifericSelect.find(periferic => periferic.nombre_periferico === e.target.value)
    this.port_cardForm.get('periferico_id').setValue(perifericSelected.periferico_id);
  }

  public saveForm(port_card: Port_card) {
    if (this.isEdition) this.editPort_card.emit(port_card);
    else this.savePort_card.emit(port_card);
  }

  public handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  public elementDelete(item: any) {
    this.deletePort_card.emit(item);
  }


}
