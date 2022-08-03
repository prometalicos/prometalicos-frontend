import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, ViewContainerRef, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Periferic_type } from '../../../models/periferic_type.model';
import { ToasterComponent, ToasterPlacement } from '@coreui/angular-pro';
import { AppToastComponent } from '../../../../../shared-components/toasters/toast/components/toast.component';


@Component({
  selector: 'app-periferic_type-create',
  templateUrl: './periferic_type-create.component.html',
  styleUrls: ['./periferic_type-create.component.scss']
})
export class Periferic_typeCreateComponent implements OnInit {
  @Input() deleteSuccess: boolean = false;
  @Input() editSuccess: boolean = false;
  @Input() saveSuccess: boolean = false;
  @Input() periferic_typeList: Periferic_type[] = [];
  @Output() savePeriferic_type: EventEmitter<Periferic_type> = new EventEmitter<Periferic_type>();
  @Output() editPeriferic_type: EventEmitter<Periferic_type> = new EventEmitter<Periferic_type>();
  @Output() deletePeriferic_type: EventEmitter<Periferic_type> = new EventEmitter<Periferic_type>();

  public columns = [
    { key: 'nombre_tipo_periferico', _style: { width: '20%' } },
    { key: 'estado', _style: { width: '10%' } },
    { key: 'acciones', label: 'Acciones', _style: { width: '15%' }, filter: false, sorter: false }
  ];

  public periferic_typeForm: FormGroup;
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
    
    if (this.editSuccess) {
      this.visible = false;
      this.addToast('tipo de periferico editado con éxito', 'success');
    }
    if (this.deleteSuccess) this.addToast('tipo de periferico eliminado con éxito', 'success');
    if (this.saveSuccess) {
      
      this.visible = false;
      this.addToast('tipo de periferico agregado con éxito', 'success');
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


  public initForm(item?: Periferic_type) {
    
    this.periferic_typeForm = this.fb.group({
      tipo_periferico_id: [item && item.tipo_periferico_id || null],
      nombre_tipo_periferico: [item && item.nombre_tipo_periferico || '', [Validators.required, this.uniqueName.bind(this)]],
      estado: [item && item.estado || false, [Validators.required]],
    })
  }

  public uniqueName(control: AbstractControl) {
    const idControlParent = control.parent && control.parent.value;
    const name = control.value;
    if (name && idControlParent) {
      if (this.periferic_typeList.some(periferic_type => periferic_type.nombre_tipo_periferico.toLowerCase() === name.toLowerCase() && periferic_type.tipo_periferico_id !== idControlParent.tipo_periferico_id)) return { duplicated: true }
      return true;
    }
  }

  public saveForm(periferic_type: Periferic_type) {
    console.log(periferic_type)
    if (this.isEdition) this.editPeriferic_type.emit(periferic_type);
    
    else this.savePeriferic_type.emit(periferic_type);
  }

  public openPeriferic_typeModal(isEdition: boolean, item?: any) {
    
    this.initForm(item);
    this.visible = !this.visible;
    this.isEdition = isEdition;
  }

  public handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  public elementDelete(item: any) {
    this.deletePeriferic_type.emit(item);
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
