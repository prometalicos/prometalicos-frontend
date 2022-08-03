import { Component, OnInit } from '@angular/core';
import { ManageService } from '../../../services/manage.service';
import { Role } from '../../../models/role.model';
import { Permission } from '../../../models/permission.model';


@Component({
  selector: 'app-role-create-page',
  templateUrl: './role-create-page.component.html',
  styleUrls: ['./role-create-page.component.scss']
})
export class RoleCreatePageComponent implements OnInit {
  public roleList: Role[] = [];
  public permissionList: Permission[] = [];
  public editSuccess: boolean = false;
  public saveSuccess: boolean = false;
  public deleteSuccess: boolean = false;

  constructor(private manageService: ManageService) { }

  ngOnInit(): void {
    this.getAllPermission();
    this.getAllRole();
  }

  public getAllRole() {
    
    this.manageService.getRole().subscribe((res: any) => {      
      console.log(res);
      this.roleList = res.data;
      console.log(this.roleList);
    })
    
  }

  public getAllPermission() {
    
    this.manageService.getPermission().subscribe((res: any) => {
      this.permissionList = res.data;
    })
  }


  public saverole(role: Role) {
   
    this.manageService.addRole(role).subscribe((res) => {
      if (res) {
        this.saveSuccess = true;
        this.getAllRole();
      }
    });
  }

  public editrole(role: Role) {
    
    this.manageService.editRole(role).subscribe((res: any) => {
      this.editSuccess = true;
        this.getAllRole();
      if (res) {
        
      }
    });
  }

  public deleterole(role: Role) {
    
    this.manageService.deleteRole(role).subscribe((res: any) => {
      
      if (res) {
        this.deleteSuccess = true;
        this.getAllRole();
      }
    });
  }

}
