import { Component, OnInit } from '@angular/core';
import { SubsystemsService } from '../../subsystems.service';

@Component({
  selector: 'app-sizing-page',
  templateUrl: './sizing-page.component.html',
  styleUrls: ['./sizing-page.component.scss']
})
export class SizingPageComponent implements OnInit {
  public dataSizing: any;
  public dataSizingHistory: any;
  constructor(private subsystemsService: SubsystemsService) { }

  ngOnInit(): void {
    this.subsystemsService.getSizingAll().subscribe((data: any) => {
      this.dataSizingHistory = data.rows;
      console.log(this.dataSizingHistory)
    });
    this.subsystemsService.getData().forEach((data) => {
      console.log(data)
      this.dataSizing = data;
    });
  }

}
