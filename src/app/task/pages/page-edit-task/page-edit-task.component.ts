import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/core/models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-page-edit-task',
  templateUrl: './page-edit-task.component.html',
  styleUrls: ['./page-edit-task.component.scss'],
})
export class PageEditTaskComponent implements OnInit {
  public item!: Task;

  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.taskService.getItemById(id).subscribe((data) => {
      // console.log('data', data);
      this.item = data;
    });
  }

  ngOnInit(): void {}
  public onEdit(obj: Task) {
    this.taskService
      .update(obj)
      .subscribe((data) => this.router.navigate(['']));
  }
}
