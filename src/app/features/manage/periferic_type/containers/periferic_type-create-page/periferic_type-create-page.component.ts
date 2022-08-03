import { Component, OnInit, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { ToasterComponent, ToasterPlacement } from '@coreui/angular-pro';
import { Periferic_type } from '../../../models/periferic_type.model';
import { ManageService } from '../../../services/manage.service';


@Component({
  selector: 'app-periferic_type-create-page',
  templateUrl: './periferic_type-create-page.component.html',
  styleUrls: ['./periferic_type-create-page.component.scss']
})
export class Periferic_typeCreatePageComponent implements OnInit {
  public editSuccess: boolean = false;
  public saveSuccess: boolean = false;
  public deleteSuccess: boolean = false;
  public periferic_typeList: Periferic_type[] = [];

  constructor(private manageService: ManageService) { }



  ngOnInit(): void {
    
    this.getAllPeriferic_type();
  }

  public savePeriferic_type(periferic_type: Periferic_type) {
    
    this.manageService.addPeriferic_type(periferic_type).subscribe((res) => {
      if (res) {
        this.saveSuccess = true;
        this.getAllPeriferic_type();
      }
    });
  }

  public getAllPeriferic_type() {
    
    this.manageService.getPeriferic_type().subscribe((res: any) => {
      
      this.periferic_typeList = res.data;
      
    })
  }

  public editPeriferic_type(periferic_type: Periferic_type) {
    
    this.manageService.editPeriferic_type(periferic_type).subscribe((respuestaa: any) => {

      if (respuestaa != null) {
      this.editSuccess = true;
      this.getAllPeriferic_type();
        
      }
    });
  }

  public deletePeriferic_type(periferic_type: Periferic_type) {
    this.manageService.deletePeriferic_type(periferic_type).subscribe((res: any) => {
      
      if (res) {
        this.deleteSuccess = true;
        this.getAllPeriferic_type();
      }
    });
  }
}
