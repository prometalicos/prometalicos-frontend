import { Component, OnInit } from '@angular/core';
import { ManageService } from '../../../services/manage.service';
import { Permission } from '../../../models/permission.model';


@Component({
  selector: 'app-permission-create-page',
  templateUrl: './permission-create-page.component.html',
  styleUrls: ['./permission-create-page.component.scss']
})
export class PermissionCreatePageComponent implements OnInit {
  public permissionList: Permission[] = [];
  
  public editSuccess: boolean = false;
  public saveSuccess: boolean = false;
  public deleteSuccess: boolean = false;

  constructor(private manageService: ManageService) { }

  ngOnInit(): void {

    this.getAllPermission();
  }

  public getAllPermission() {
    
    this.manageService.getPermission().subscribe((res: any) => {      
      
      this.permissionList = res.data;
    })
    
  }


  public savePermission(permission: Permission) {
   
    this.manageService.addPermission(permission).subscribe((res) => {
      if (res) {
        this.saveSuccess = true;
        this.getAllPermission();
      }
    });
  }

  public editPermission(permission: Permission) {
    
    this.manageService.editPermission(permission).subscribe((res: any) => {
      this.editSuccess = true;
        this.getAllPermission();
      if (res) {
        this.editSuccess = true;
        this.getAllPermission();
      }
    });
  }

  public deletePermission(permission: Permission) {
    
    this.manageService.deletePermission(permission).subscribe((res: any) => {
      
      if (res) {
        this.deleteSuccess = true;
        this.getAllPermission();
      }
    });
  }

}
