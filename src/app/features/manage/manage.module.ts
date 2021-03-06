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
import { Periferic_typeCreateComponent } from './periferic_type/components/periferic_type-create/periferic_type-create.component';
import { Periferic_typeCreatePageComponent } from './periferic_type/containers/periferic_type-create-page/periferic_type-create-page.component';
import { PerifericCreateComponent } from './periferic/components/periferic-create/periferic-create.component';
import { PerifericCreatePageComponent } from './periferic/containers/periferic-create-page/periferic-create-page.component';
import { Port_cardCreateComponent } from './port_card/components/port_card-create/port_card-create.component';
import { Port_cardCreatePageComponent } from './port_card/containers/port_card-create-page/port_card-create-page.component';
import { PermissionCreateComponent } from './permission/components/permission-create/permission-create.component';
import { PermissionCreatePageComponent } from './permission/containers/permission-create-page/permission-create-page.component';
import { RoleCreateComponent } from './role/components/role-create/role-create.component';
import { RoleCreatePageComponent } from './role/containers/role-create-page/role-create-page.component';

import { CardModule, ButtonModule, GridModule, FormModule, BadgeModule, AlertModule, TableModule, UtilitiesModule, CollapseModule, ToastComponent, ToastModule, MultiSelectModule } from '@coreui/angular-pro';
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
          title: 'Concesi??n',
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
      {
        path: 'periferic_type',
        component: Periferic_typeCreatePageComponent,
        data: {
          title: 'Tipo perifericos',
        },
      },
      {
        path: 'periferic',
        component: PerifericCreatePageComponent,
        data: {
          title: 'Perifericos',
        },
      },
      {
        path: 'port_card',
        component: Port_cardCreatePageComponent,
        data: {
          title: 'tarjeta puerto',
        },
      },
      {
        path: 'permission',
        component: PermissionCreatePageComponent,
        data: {
          title: 'tarjeta puerto',
        },
      },
      {
        path: 'role',
        component: RoleCreatePageComponent,
        data: {
          title: 'tarjeta puerto',
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
    GeneralTableComponent,
    Periferic_typeCreatePageComponent,
    Periferic_typeCreateComponent,
    PerifericCreatePageComponent,
    PerifericCreateComponent,
    Port_cardCreateComponent,
    Port_cardCreatePageComponent,
    PermissionCreateComponent,
    PermissionCreatePageComponent,
    RoleCreateComponent,
    RoleCreatePageComponent,
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
    AppToastModule,
    MultiSelectModule,
  ]
})
export class ManageModule { }
