import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/core/models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-page-add-task',
  templateUrl: './page-add-task.component.html',
  styleUrls: ['./page-add-task.component.scss']
})
export class PageAddTaskComponent implements OnInit {
  public item: Task = new(Task);

  constructor(private taskService: TaskService, private router : Router) { }

  ngOnInit(): void {
  }

  public onAdd(obj: Task){
    this.taskService.add(obj).subscribe((data) => {
      this.router.navigate(['']);
    });
  }

}
