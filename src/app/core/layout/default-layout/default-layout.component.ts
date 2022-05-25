import { Component } from '@angular/core';
import { NavService } from './services/nav.service';
import { INavData } from '@coreui/angular-pro';
import { navItems } from './_nav'


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  //public navItems= navItems;
  public navItems: INavData[] = [];
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(
    private navService: NavService,
  ) {}

  ngOnInit() {
    this.navService.getMenu().subscribe((navItems: any) => {      
      this.navItems = navItems;
    });
  }
}
