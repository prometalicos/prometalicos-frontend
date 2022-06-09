import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SizingComponent } from './components/sizing/sizing.component';
import { SizingPageComponent } from './containers/sizing-page/sizing-page.component';
import { UtilitiesModule, SharedModule, CardModule } from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Subsistemas',
    },
    children: [
      {
        path: '',
        redirectTo: 'sizing',
      },
      {
        path: 'sizing',
        component: SizingPageComponent,
        data: {
          title: 'Dimensionamiento',
        },
      }
    ],
  },
];

@NgModule({
  declarations: [
    SizingComponent,
    SizingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilitiesModule,
    SharedModule,
    IconModule,
    CardModule,
  ]
})
export class SubsystemsModule { }
