import { Component, OnInit } from '@angular/core';
import { StateTask } from 'src/app/core/enums/state-task';
import { Task } from 'src/app/core/models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-page-list-task',
  templateUrl: './page-list-task.component.html',
  styleUrls: ['./page-list-task.component.scss'],
})
export class PageListTaskComponent implements OnInit {
  public collection!: Task[];
  public categories = Object.values(StateTask);
  public toDos!: Task[];
  public done!: Task[];
  public inProgress!: Task[];
  public blocked!: Task[];

  constructor(private taskService: TaskService) {
    this.taskService.collection.subscribe((datas) => {
      this.collection = datas;
      this.toDos = this.collection.filter((item) => item.category === 'TODO');
      this.inProgress = this.collection.filter(
        (item) => item.category === 'IN_PROGRESS'
      );
      this.done = this.collection.filter((item) => item.category === 'DONE');
      this.blocked = this.collection.filter(
        (item) => item.category === 'BLOCKED'
      );
      console.log('toDos', this.toDos);
    });
  }
  // récupérer la collection avec la category TODO
  // this.collection = this.taskService.collection.filter((item) => {
  //  return item.category === 'TODO';
  // });

  ngOnInit(): void {}
}
