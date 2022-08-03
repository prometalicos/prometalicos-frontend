import { Component, Input, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Permission } from '../../../models/permission.model';
import { ToasterPlacement, ToasterComponent } from '@coreui/angular-pro';
import { AppToastComponent } from '../../../../../shared-components/toasters/toast/components/toast.component';

@Component({
  selector: 'app-permission-create',
  templateUrl: './permission-create.component.html',
  styleUrls: ['./permission-create.component.scss']
})
export class PermissionCreateComponent implements OnInit {
  @Input() permissionList: Permission[] = [];
  @Input() saveSuccess: boolean = false;
  @Input() deleteSuccess: boolean = false;
  @Input() editSuccess: boolean = false;
  @Output() savePermission: EventEmitter<Permission> = new EventEmitter<Permission>();
  @Output() editPermission: EventEmitter<Permission> = new EventEmitter<Permission>();
  @Output() deletePermission: EventEmitter<Permission> = new EventEmitter<Permission>();

  
  public columns = [
    { key: 'nombre_permiso', _style: { width: '20%' } },
    { key: 'padre', _style: { width: '10%' } },
    { key: 'nivel', _style: { width: '10%' } },
    { key: 'icono', _style: { width: '10%' } },
    { key: 'url', _style: { width: '10%' } },
    { key: 'acciones', label: 'Acciones', _style: { width: '15%' }, filter: false, sorter: false }
  ];
  public isEdition: boolean = false;
  public visible = false;
  public permissionForm: FormGroup;
  public placement = ToasterPlacement.TopEnd;

  @ViewChild(ToasterComponent) toaster!: ToasterComponent;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    
  }

  ngOnChanges() {
    if (this.editSuccess) {
      this.visible = false;
      this.addToast('permiso editado con éxito', 'success');
    }
    if (this.deleteSuccess) this.addToast('permiso eliminado con éxito', 'success');
    if (this.saveSuccess) {
      this.visible = false;
      this.addToast('permiso agregado con éxito', 'success');
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

  public initForm(item?: Permission) {
    this.permissionForm = this.fb.group({
      permiso_id: [item && item.permiso_id || null],
      nombre_permiso: [item && item.nombre_permiso || null],
      padre: [item && item.padre || null],
      nivel: [item && item.nivel || null],
      icono: [item && item.icono || null],
      url: [item && item.url || '',[ Validators.required]],
      //estado: [item && item.estado || false, [Validators.required]],
    });
  }

  public openPermissionModal(isEdition: boolean, item?: any) {

    this.initForm(item);
    this.visible = !this.visible;
    this.isEdition = isEdition;
  }


  public getCorrectError(control?) {
    if (control) {
      if (control?.errors && control.errors?.required) return 'Este campo no puede estar vacío';
      if (control.errors && control.errors.invalidCharacter) return 'Caracteres inválidos';
      if (control.errors && control.errors.duplicated) return 'El campo no puede estar duplicado';
    }
  }

 

  public saveForm(permission: Permission) {
    if (this.isEdition) this.editPermission.emit(permission);
    else this.savePermission.emit(permission);
  }

  public handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  public elementDelete(item: any) {
    this.deletePermission.emit(item);
  }


}
