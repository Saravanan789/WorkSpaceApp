import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CreateTaskFormComponent } from './components/create-task-form/create-task-form.component';


const routes: Routes = [{ path: '', component: DashboardComponent },
{ path: "createTask", component: CreateTaskComponent },
{ path: 'createTaskForm', component: CreateTaskFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
