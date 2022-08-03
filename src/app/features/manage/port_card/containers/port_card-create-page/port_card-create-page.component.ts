import { Component, OnInit } from '@angular/core';
import { ManageService } from '../../../services/manage.service';
import { Port_card } from '../../../models/port_card.model';
import { Periferic } from '../../../models/periferic.model';

@Component({
  selector: 'app-port_card-create-page',
  templateUrl: './port_card-create-page.component.html',
  styleUrls: ['./port_card-create-page.component.scss']
})
export class Port_cardCreatePageComponent implements OnInit {
  public port_cardList: Port_card[] = [];
  public perifericList: Periferic[] = [];
  public editSuccess: boolean = false;
  public saveSuccess: boolean = false;
  public deleteSuccess: boolean = false;

  constructor(private manageService: ManageService) { }

  ngOnInit(): void {
    this.getAllPeriferic();
    this.getAllPort_card();
  }

  public getAllPort_card() {
    
    this.manageService.getPort_card().subscribe((res: any) => {      
      
      this.port_cardList = res.data;
    })
    
  }

  public getAllPeriferic() {
    
    this.manageService.getPeriferic().subscribe((res: any) => {
      this.perifericList = res.data;
      
    })
  }

  public savePort_card(port_card: Port_card) {
   
    this.manageService.addPort_card(port_card).subscribe((res) => {
      if (res) {
        this.saveSuccess = true;
        this.getAllPort_card();
      }
    });
  }

  public editPort_card(port_card: Port_card) {
    
    this.manageService.editPort_card(port_card).subscribe((res: any) => {
      this.editSuccess = true;
        this.getAllPort_card();
      if (res) {
        this.editSuccess = true;
        this.getAllPort_card();
      }
    });
  }

  public deletePort_card(port_card: Port_card) {
    debugger
    this.manageService.deletePort_card(port_card).subscribe((res: any) => {
      console.log(port_card)
      console.log(res)
      if (res) {
        this.deleteSuccess = true;
        this.getAllPort_card();
      }
    });
  }

}
