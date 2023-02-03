import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddTaskComponent } from './pages/page-add-task/page-add-task.component';
import { PageEditTaskComponent } from './pages/page-edit-task/page-edit-task.component';
import { PageListTaskComponent } from './pages/page-list-task/page-list-task.component';

const routes: Routes = [
  {
    path: '',
    component: PageListTaskComponent
  },
  {
    path: 'add',
    component: PageAddTaskComponent
  },
  {
    path: 'edit/:id',
    component: PageEditTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
