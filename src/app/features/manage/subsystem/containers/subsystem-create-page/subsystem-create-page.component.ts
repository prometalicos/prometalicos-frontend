import { Component, OnInit } from '@angular/core';
import { ManageService } from '../../../services/manage.service';
import { Campus } from '../../../models/campus.model';
import { Subsystem } from '../../../models/subsystem.model';

@Component({
  selector: 'app-subsystem-create-page',
  templateUrl: './subsystem-create-page.component.html',
  styleUrls: ['./subsystem-create-page.component.scss']
})
export class SubsystemCreatePageComponent implements OnInit {
  public campusList: Campus[] = [];
  public subsystemList: Subsystem[] = [];
  public editSuccess: boolean = false;
  public saveSuccess: boolean = false;
  public deleteSuccess: boolean = false;

  constructor(private manageService: ManageService) { }


 ngOnInit(): void {
    this.getAllSubsystem();   
    this.getAllCampus();
  }

  public getAllCampus() {
    this.manageService.getCampus().subscribe((res: any) => {          
      this.campusList = res.data;     
    });
  }

  public getAllSubsystem() {
    /*
    this.manageService.getSubsystem().subscribe((res: any) => {
      
      this.subsystemList = res.data;
      
      
    })
    */
  }

  public saveSubsystem(subsystem: Subsystem) {
    this.manageService.addSubsystem(subsystem).subscribe((res) => {
      if (res) {       
        this.saveSuccess = true;
        this.getAllSubsystem();
      }
    });
  }

  public editSubsystem(subsystem: Subsystem) {
    this.manageService.editSubsystem(subsystem).subscribe((res: any) => {
      this.editSuccess = true;
        this.getAllSubsystem();
      if (res) {
        this.editSuccess = true;
        this.getAllSubsystem();
      }
    });
  }

  public deleteSubsystem(subsystem: Subsystem) {
    this.manageService.deleteSubsystem(subsystem).subscribe((res: any) => {
      if (res) {
        this.deleteSuccess = true;
        this.getAllSubsystem();
      }
    });
  }
}
