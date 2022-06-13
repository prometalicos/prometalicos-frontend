import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcessionCreatePageComponent } from './concession/containers/concession-create-page/concession-create-page.component';
import { ConcessionCreateComponent } from './concession/components/concession-create/concession-create.component';
import { CampusCreateComponent } from './campus/components/campus-create/campus-create.component';
import { CampusCreatePageComponent } from './campus/containers/campus-create-page/campus-create-page.component';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './users/components/user-create/user-create.component';
import { UserCreatePageComponent } from './users/containers/user-create-page/user-create-page.component';
import { SubsystemCreateComponent } from './subsystem/components/subsystem-create/subsystem-create.component';
import { SubsystemCreatePageComponent } from './subsystem/containers/subsystem-create-page/subsystem-create-page.component';

import { CardModule, ButtonModule, GridModule, FormModule, BadgeModule, AlertModule, TableModule, UtilitiesModule, CollapseModule, ToastComponent, ToastModule } from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, SmartTableModule } from '@coreui/angular-pro';
import { GeneralTableComponent } from './general-table/general-table.component';
import { SharedModule } from '@coreui/angular-pro';
import { SharedFeaturesModule } from '../../shared/shared.module';
import { AppToastModule } from '../../shared-components/toasters/toast/toast.module';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Administrar',
    },
    children: [
      {
        path: '',
        redirectTo: 'concession',
      },
      {
        path: 'concession',
        component: ConcessionCreatePageComponent,
        data: {
          title: 'Concesión',
        },
      },
      {
        path: 'campus',
        component: CampusCreatePageComponent,
        data: {
          title: 'Sede',
        },
      },
      {
        path: 'users',
        component: UserCreatePageComponent,
        data: {
          title: 'Usuarios',
        },
      },
      {
        path: 'subsystem',
        component: SubsystemCreatePageComponent,
        data: {
          title: 'Subsistemas',
        },
      },
    
    ],
  },
];


@NgModule({
  declarations: [
    ConcessionCreatePageComponent,
    ConcessionCreateComponent,
    CampusCreateComponent,
    CampusCreatePageComponent,
    UserCreateComponent,
    UserCreatePageComponent,
    SubsystemCreateComponent,
    SubsystemCreatePageComponent,
    GeneralTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AlertModule,
    CardModule,
    CollapseModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule,
    ModalModule,
    BadgeModule,
    SharedModule,
    TableModule,
    ReactiveFormsModule,
    SmartTableModule,
    UtilitiesModule,
    ToastModule,
    AppToastModule
  ]
})
export class ManageModule { }
