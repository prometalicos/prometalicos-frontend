import { Component, OnInit, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { ToasterComponent, ToasterPlacement } from '@coreui/angular-pro';
import { Periferic } from '../../../models/periferic.model';
import { ManageService } from '../../../services/manage.service';
import { Subsystem } from '../../../models/subsystem.model';
import { Periferic_type } from '../../../models/periferic_type.model';


@Component({
  selector: 'app-periferic-create-page',
  templateUrl: './periferic-create-page.component.html',
  styleUrls: ['./periferic-create-page.component.scss']
})
export class PerifericCreatePageComponent implements OnInit {
  public editSuccess: boolean = false;
  public saveSuccess: boolean = false;
  public deleteSuccess: boolean = false;
  public perifericList: Periferic[] = [];
  public periferic_typeList: Periferic_type[] = [];
  public subsystemList: Subsystem[] = [];

  constructor(private manageService: ManageService) { }



  ngOnInit(): void {
    
    this.getAllPeriferic();
    this.getAllPeriferic_type();
    this.getAllSubsystem();
  }

  public savePeriferic(periferic: Periferic) {
    
    this.manageService.addPeriferic(periferic).subscribe((res) => {
      
      if (res) {
        this.saveSuccess = true;
        this.getAllPeriferic();
      }
    });
  }

  public getAllPeriferic() {
    
    this.manageService.getPeriferic().subscribe((res: any) => {
      
      this.perifericList = res.data;
      
    })
  }

  public getAllPeriferic_type() {
    
    this.manageService.getPeriferic_type().subscribe((res: any) => {

      this.periferic_typeList = res.data;
      
    })
  }

  public getAllSubsystem() {
    
    this.manageService.getSubsystem().subscribe((res: any) => {
      
      this.subsystemList = res.data;

    })
    
  }

  public editPeriferic(periferic: Periferic) {
    
    this.manageService.editPeriferic(periferic).subscribe((respuestaa: any) => {
      
      if (respuestaa != null) {
      this.editSuccess = true;
      this.getAllPeriferic();
        
      }
    });
  }

  public deletePeriferic(periferic: Periferic) {
    this.manageService.deletePeriferic(periferic).subscribe((res: any) => {
      
      if (res) {
     
        this.deleteSuccess = true;
        this.getAllPeriferic();
      }
      
    });
  }
}
