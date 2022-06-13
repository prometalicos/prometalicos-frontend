import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Concession } from '../models/concession.model';


@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss']
})
export class GeneralTableComponent implements OnInit {
  @Input() columns: any[] = [];
  @Input() data: any[] = [];
  @Output() onEdition: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();


  public dataTable: any[] = this.data;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges() {
  }

  public getBadge(status: any) {
    switch (status) {
      case true:
        return 'success';
      default:
        return 'secondary';
    }
  }

  public elementEdit(item: any) {
    this.onEdition.emit(item);
  }

  public elementDelete(item: any) {
    this.onDelete.emit(item);
  }
}
