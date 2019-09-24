import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CreateTaskFormComponent } from './components/create-task-form/create-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent,CreateTaskComponent, CreateTaskFormComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,RouterModule,
    ReactiveFormsModule
  ]
})
export class WorkspaceModule { }
