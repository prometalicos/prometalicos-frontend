import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sizing',
  templateUrl: './sizing.component.html',
  styleUrls: ['./sizing.component.scss']
})
export class SizingComponent implements OnInit {
  public sizingCurrent: any;
  @Input() dataSizing: any;
  @Input() dataSizingHistory: any;

  public columns = [
    { key: 'placa_identificada', label: 'Placa',_style: { width: '15%' } },
    { key: 'height', label: 'Alto', _style: { width: '15%' } },
    { key: 'length', label: 'Largo', _style: { width: '15%' } },
    { key: 'width', label: 'Ancho', _style: { width: '15%' } },
    { key: 'descripcion', _style: { width: '10%' } },
    { key: 'fecha_hora', label: 'Fecha/Hora', _style: { width: '10%' } },
    { key: 'acciones', label: 'Acciones', _style: { width: '15%' }, filter: false, sorter: false }
  ];

  constructor() { }

  ngOnInit(): void {
   
  }

  ngOnChanges() {
    if (this.dataSizing) {
      this.sizingCurrent = {
        fecha_hora: new Date(this.dataSizing.lectura_camara_lpr_obj.fecha_hora).toUTCString() || '',
        placa: this.dataSizing.lectura_camara_lpr_obj.placa_identificada || '',
        urlFoto: this.dataSizing.lectura_camara_lpr_obj.url_foto_ampliada || '',
        ancho: this.dataSizing.lectura_sensor_laser_obj.width,
        largo: this.dataSizing.lectura_sensor_laser_obj.length,
        alto: this.dataSizing.lectura_sensor_laser_obj.height,
      }   
    };
    this.dataSizingHistory    
  };


}
