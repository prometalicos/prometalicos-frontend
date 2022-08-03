import { Component, Input, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Role } from '../../../models/role.model';
import { Permission } from '../../../models/permission.model';
import { ToasterPlacement, ToasterComponent } from '@coreui/angular-pro';
import { AppToastComponent } from '../../../../../shared-components/toasters/toast/components/toast.component';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {
  @Input() roleList: Role[] = [];
  @Input() permissionList: Permission[] = [];
  @Input() saveSuccess: boolean = false;
  @Input() deleteSuccess: boolean = false;
  @Input() editSuccess: boolean = false;
  @Output() saverole: EventEmitter<Role> = new EventEmitter<Role>();
  @Output() editRole: EventEmitter<Role> = new EventEmitter<Role>();
  @Output() deleteRole: EventEmitter<Role> = new EventEmitter<Role>();

  
  public columns = [
    { key: 'nombre_rol', _style: { width: '20%' } },
    //{ key: 'permisos', _style: { width: '10%' } },
    { key: 'acciones', label: 'Acciones', _style: { width: '15%' }, filter: false, sorter: false }
  ];
  public isEdition: boolean = false;
  public visible = false;
  public roleForm: FormGroup;
  public permissionForm: FormGroup;
  public placement = ToasterPlacement.TopEnd;

  @ViewChild(ToasterComponent) toaster!: ToasterComponent;

  constructor(private fb: FormBuilder) {
 
   }

  ngOnInit(): void {
    this.initForm();

    
  }

  ngOnChanges() {
    if (this.editSuccess) {
      this.visible = false;
      this.addToast('Rol editado con éxito', 'success');
    }
    if (this.deleteSuccess) this.addToast('Rol eliminado con éxito', 'success');
    if (this.saveSuccess) {
      this.visible = false;
      this.addToast('Rol agregado con éxito', 'success');
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

  public initForm(item?: Role) {
    this.roleForm = this.fb.group({
      rol_id: [item && item.rol_id || null],
      nombre_rol: [item && item.nombre_rol || null],
      permisos: [],
      permiso_id: [null],
      multiSelect: [],
      //estado: [item && item.estado || false, [Validators.required]],
    });
    
  }



  public openRoleModal(isEdition: boolean, item?: any) {

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

 

  public saveForm(role: Role) {
    
    if (this.isEdition) this.editRole.emit(role);
    else this.saverole.emit(role);

  }

  public handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  public elementDelete(item: any) {
    this.deleteRole.emit(item);
  }


}
