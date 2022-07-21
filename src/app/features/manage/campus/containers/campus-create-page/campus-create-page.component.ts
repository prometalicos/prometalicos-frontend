import { Component, OnInit } from '@angular/core';
import { ManageService } from '../../../services/manage.service';
import { Campus } from '../../../models/campus.model';
import { Concession } from '../../../models/concession.model';

@Component({
  selector: 'app-campus-create-page',
  templateUrl: './campus-create-page.component.html',
  styleUrls: ['./campus-create-page.component.scss']
})
export class CampusCreatePageComponent implements OnInit {
  public campusList: Campus[] = [];
  public concessionsList: Concession[] = [];
  public editSuccess: boolean = false;
  public saveSuccess: boolean = false;
  public deleteSuccess: boolean = false;

  constructor(private manageService: ManageService) { }

  ngOnInit(): void {
    this.getAllConcessions();
    this.getAllCampus();
  }

  public getAllCampus() {
    this.manageService.getCampus().subscribe((res: any) => {      
      this.campusList = res.rows;
    })
  }

  public getAllConcessions() {
    this.manageService.getConcessions().subscribe((res: any) => {
      this.concessionsList = res.rows;
    })
  }

  public saveCampus(campus: Campus) {
    this.manageService.addCampus(campus).subscribe((res) => {
      if (res) {
        this.saveSuccess = true;
        this.getAllCampus();
      }
    });
  }

  public editCampus(campus: Campus) {
    this.manageService.editCampus(campus).subscribe((res: any) => {
      if (res) {
        this.editSuccess = true;
        this.getAllCampus();
      }
    });
  }

  public deleteCampus(campus: Campus) {
    this.manageService.deleteCampus(campus).subscribe((res: any) => {
      if (res) {
        this.deleteSuccess = true;
        this.getAllCampus();
      }
    });
  }

}
