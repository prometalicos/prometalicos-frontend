import { Component, OnInit, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { ToasterComponent, ToasterPlacement } from '@coreui/angular-pro';
import { Concession } from '../../../models/concession.model';
import { ManageService } from '../../../services/manage.service';


@Component({
  selector: 'app-concession-create-page',
  templateUrl: './concession-create-page.component.html',
  styleUrls: ['./concession-create-page.component.scss']
})
export class ConcessionCreatePageComponent implements OnInit {
  public editSuccess: boolean = false;
  public saveSuccess: boolean = false;
  public deleteSuccess: boolean = false;
  public concessionsList: Concession[] = [];

  constructor(private manageService: ManageService) { }



  ngOnInit(): void {
    
    this.getAllConcessions();
  }

  public saveConcession(concession: Concession) {
    
    this.manageService.addConcession(concession).subscribe((res) => {
      if (res) {
        this.saveSuccess = true;
        this.getAllConcessions();
      }
    });
  }

  public getAllConcessions() {
    
    this.manageService.getConcessions().subscribe((res: any) => {
      
      this.concessionsList = res.data;
      
    })
  }

  public editConcession(concession: Concession) {
    
    this.manageService.editConcession(concession).subscribe((respuestaa: any) => {
      
      

      if (respuestaa == null) {
      this.editSuccess = true;
      this.getAllConcessions();
        
      }
    });
  }

  public deleteConcession(concession: Concession) {
    this.manageService.deleteConcession(concession).subscribe((res: any) => {
      
      if (res) {
        this.deleteSuccess = true;
        this.getAllConcessions();
      }
    });
  }
}
