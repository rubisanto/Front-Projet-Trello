import { Component, OnInit } from '@angular/core';
import { StateTask } from 'src/app/core/enums/state-task';
import { Task } from 'src/app/core/models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-page-list-task',
  templateUrl: './page-list-task.component.html',
  styleUrls: ['./page-list-task.component.scss']
})
export class PageListTaskComponent implements OnInit {
  public collection!: Task[];
  public categories = Object.values(StateTask)

  constructor(private taskService : TaskService) {
    this.taskService.collection.subscribe((datas) => {
      // console.log('dans le sbuscribe');
      this.collection = datas;
    });
    // console.log(this.collection);

    // récupérer la collection avec la category TODO
    // this.collection = this.taskService.collection.filter((item) => {
    //   return item.category === 'TODO';
    // });
   }

  ngOnInit(): void {
  }

}
