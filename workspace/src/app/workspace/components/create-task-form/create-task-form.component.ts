import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.less']
})
export class CreateTaskFormComponent implements OnInit {

  createTaskForm: FormGroup;
  title: AbstractControl;
  externalRefId:AbstractControl;
  externalStatus:AbstractControl;
  externalEffort:AbstractControl;
  description:AbstractControl;
  status:AbstractControl;
  sprint:AbstractControl;
  severity:AbstractControl;
  criticality:AbstractControl;
  owner:AbstractControl;
  story:AbstractControl;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.createTaskForm = this.formBuilder.group({
      title: ['', Validators.required],
      externalRefId: ['', Validators.required],
      externalStatus: ['', [Validators.required,]],
      externalEffort: ['', [Validators.required,]],
      description: ['', [Validators.required,]],
      status: ['', [Validators.required,]],
      sprint: ['', [Validators.required,]],
      severity: ['', [Validators.required,]],
      criticality: ['', [Validators.required,]],
      owner: ['', [Validators.required,]],
      story: ['', [ Validators.requiredTrue,]],

    });
    this.title = this.createTaskForm.controls['title'];
    this.externalRefId=this.createTaskForm.controls['externalRefId'];
    this.externalStatus=this.createTaskForm.controls['externalStatus'];
    this.externalEffort=this.createTaskForm.controls['externalEffort'];
    this.description=this.createTaskForm.controls['description'];
    this.status=this.createTaskForm.controls['status'];
    this.sprint=this.createTaskForm.controls['sprint'];
    this.severity=this.createTaskForm.controls['severity'];
    this.criticality=this.createTaskForm.controls['criticality'];
    this.owner=this.createTaskForm.controls['owner']; 
    this.story=this.createTaskForm.controls['story'];
  

  }
  onSubmit() {
                console.log(this.createTaskForm.value);
  }

}
