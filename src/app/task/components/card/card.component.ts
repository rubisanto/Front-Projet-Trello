import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { StateTask } from 'src/app/core/enums/state-task';
import { Task } from 'src/app/core/models/task';
import { environment } from 'src/environments/environment';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title!: string;
  @Input() category!: StateTask;
  @Input() item!: Task;
  public categories = Object.values(StateTask);
  private url = environment.urlApi;
  constructor(private http: HttpClient, private taskService: TaskService) {}

  ngOnInit(): void {
    console.log(this.item);
  }
  public changeState(item: Task, event: Event) {
    console.log(event, 'event');
    const target = event.target as HTMLSelectElement;
    console.log('target', target);
    const state = target.value as StateTask;
    console.log('state', state);
    console.log(item);
    // const target = event.target as HTMLSelectElement;
    // console.log(target);
    // const state = target.value as StateClient; // confirmed ou option, cancelled
    // console.log(state);

    this.taskService.changeState(item, state).subscribe((data) => {
      Object.assign(item, data);
    });
  }
}
