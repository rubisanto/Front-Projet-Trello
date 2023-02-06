import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';
import { PageListTaskComponent } from './pages/page-list-task/page-list-task.component';
import { PageAddTaskComponent } from './pages/page-add-task/page-add-task.component';
import { PageEditTaskComponent } from './pages/page-edit-task/page-edit-task.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    CardComponent,
    PageListTaskComponent,
    PageAddTaskComponent,
    PageEditTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule
  ]
})
export class TaskModule { }
