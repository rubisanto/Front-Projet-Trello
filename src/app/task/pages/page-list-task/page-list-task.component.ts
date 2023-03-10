import { Component, OnInit } from '@angular/core';
import { StateTask } from 'src/app/core/enums/state-task';
import { Task } from 'src/app/core/models/task';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

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

  constructor(private taskService: TaskService, private router: Router) {
    this.taskService.collection.subscribe((datas) => {
      this.collection = datas;
      this.toDos = this.collection.filter((item) => item.category === 'To do');
      this.inProgress = this.collection.filter(
        (item) => item.category === 'In progress'
      );
      this.done = this.collection.filter((item) => item.category === 'Done');
      this.blocked = this.collection.filter(
        (item) => item.category === 'Blocked'
      );
      console.log('toDos', this.toDos);
    });
  }
  // récupérer la collection avec la category TODO
  // this.collection = this.taskService.collection.filter((item) => {
  //  return item.category === 'TODO';
  // });

  ngOnInit(): void { }

  // public goToAdd() {
  //   this.router.navigate(['add']);
  // }

}
