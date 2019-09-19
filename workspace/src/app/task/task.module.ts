import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../workspace/components/dashboard/dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class TaskModule { }
