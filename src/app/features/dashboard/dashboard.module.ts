import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './components/dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';


@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
