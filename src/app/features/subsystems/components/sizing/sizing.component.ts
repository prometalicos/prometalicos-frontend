import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sizing',
  templateUrl: './sizing.component.html',
  styleUrls: ['./sizing.component.scss']
})
export class SizingComponent implements OnInit {

  public columns = [
    { key: 'ID', _style: { width: '20%' } },
    { key: 'Placa', _style: { width: '15%' } },
    { key: 'Alto', label: 'Alto', _style: { width: '15%' } },
    { key: 'Largo', label: 'Largo', _style: { width: '15%' } },
    { key: 'Ancho', label: 'Ancho', _style: { width: '15%' } },
    { key: 'Tipo', _style: { width: '10%' } },
    { key: 'Date', label: 'Fecha/Hora', _style: { width: '10%' } },
    { key: 'acciones', label: 'Acciones', _style: { width: '15%' }, filter: false, sorter: false }
  ];

  public dimensionList = [
    {ID: '01', Placa: 'AB-123-CD', Alto: '3800', Ancho: '2900', Largo: '25690', Tipo: 'Car', Date: '2022-06-06'},
    {ID: '02', Placa: 'HI-543-JK', Alto: '3500', Ancho: '1550', Largo: '25690', Tipo: 'Car', Date: '2022-06-06'},
    {ID: '03', Placa: 'CK-897-IH', Alto: '3800', Ancho: '2770', Largo: '26710', Tipo: 'Truck', Date: '2022-06-06'},
    {ID: '04', Placa: 'GF-098-UJ', Alto: '3800', Ancho: '4240', Largo: '11140', Tipo: 'Truck', Date: '2022-06-06'},
    {ID: '05', Placa: 'JM-369-CD', Alto: '3800', Ancho: '4180', Largo: '12650', Tipo: 'Truck', Date: '2022-06-06'},
    {ID: '06', Placa: 'AB-123-CD', Alto: '3800', Ancho: '3130', Largo: '11570', Tipo: 'Van', Date: '2022-06-06'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
