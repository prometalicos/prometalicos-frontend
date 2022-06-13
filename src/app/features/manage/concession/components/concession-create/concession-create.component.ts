import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, ViewContainerRef, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Concession } from '../../../models/concession.model';
import { ToasterComponent, ToasterPlacement } from '@coreui/angular-pro';
import { AppToastComponent } from '../../../../../shared-components/toasters/toast/components/toast.component';


@Component({
  selector: 'app-concession-create',
  templateUrl: './concession-create.component.html',
  styleUrls: ['./concession-create.component.scss']
})
export class ConcessionCreateComponent implements OnInit {
  @Input() deleteSuccess: boolean = false;
  @Input() editSuccess: boolean = false;
  @Input() saveSuccess: boolean = false;
  @Input() concessionsList: Concession[] = [];
  @Output() saveConcession: EventEmitter<Concession> = new EventEmitter<Concession>();
  @Output() editConcession: EventEmitter<Concession> = new EventEmitter<Concession>();
  @Output() deleteConcession: EventEmitter<Concession> = new EventEmitter<Concession>();

  public columns = [
    { key: 'nombre', _style: { width: '20%' } },
    { key: 'direccion', _style: { width: '15%' } },
    { key: 'telefono_contacto', label: 'Teléfono', _style: { width: '15%' } },
    { key: 'correo_e', label: 'Correo', _style: { width: '15%' } },
    { key: 'url', _style: { width: '10%' } },
    { key: 'estado', _style: { width: '10%' } },
    { key: 'acciones', label: 'Acciones', _style: { width: '15%' }, filter: false, sorter: false }
  ];
  public dataTable: any[] = [];
  public concessionForm: FormGroup = this.fb.group({});
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
      this.addToast('Concesión editada con éxito', 'success');
    }
    if (this.deleteSuccess) this.addToast('Concesión eliminada con éxito', 'success');
    if (this.saveSuccess) this.addToast('Concesión agregada con éxito', 'success')
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


  public initForm(item?: any) {
    this.concessionForm = this.fb.group({
      concesion_id: [item && item.concesion_id || null],
      nombre: [item && item.nombre || '', [Validators.required, this.uniqueName.bind(this)]],
      direccion: [item && item.direccion || '', [Validators.required]],
      telefono_contacto: [item && item.telefono_contacto || '', [Validators.required, Validators.minLength(10), Validators.maxLength(64)]],
      correo_e: [item && item.correo_e || '', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      url: [item && item.url || '', [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      estado: [item && item.estado || false, [Validators.required]],
    })
  }

  public uniqueName(control: AbstractControl) {
    const idControlParent = control.parent && control.parent.value;
    const name = control.value;
    if (name && idControlParent) {
      if (this.concessionsList.some(cons => cons.nombre.toLowerCase() === name.toLowerCase() && cons.concesion_id !== idControlParent.concesion_id)) return { duplicated: true }
      return true;
    }
  }

  public saveForm(concession: Concession) {
    concession.estado = concession.estado === true ? 1 : 0;
    if (this.isEdition) this.editConcession.emit(concession);
    else this.saveConcession.emit(concession);
  }

  public openConcessionModal(isEdition: boolean, item?: any) {
    this.initForm(item);
    this.visible = !this.visible;
    this.isEdition = isEdition;
  }

  public handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  public elementDelete(item: any) {
    this.deleteConcession.emit(item);
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
