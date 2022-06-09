import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToastComponent } from './components/toast.component';
import { ToastSampleIconComponent } from './components/toast-sample-icon.component';
import { SharedModule, ToastModule, UtilitiesModule, ProgressModule, CardModule, ButtonModule,
  AlertModule, BadgeModule, GridModule} from '@coreui/angular-pro';



@NgModule({
  declarations: [
    AppToastComponent,
    ToastSampleIconComponent
  ],
  exports: [
    AppToastComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ToastModule,
    UtilitiesModule,
    ProgressModule,
    CardModule,
    ButtonModule,
    AlertModule,
    BadgeModule,
    GridModule
  ]
})
export class AppToastModule { }
