import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskModule } from './task/task.module';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
