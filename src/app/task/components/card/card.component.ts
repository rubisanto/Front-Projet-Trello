import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { StateTask } from 'src/app/core/enums/state-task';
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
  @Input() id!: number;
  public categories = Object.values(StateTask);
  private url = environment.urlApi;
  constructor(private http: HttpClient, private taskService: TaskService) {}

  ngOnInit(): void {}
  public changeState(id: number, event: Event) {
    console.log(event, 'event');
    const target = event.target as HTMLSelectElement;
    console.log('target', target);
    const state = target.value as StateTask;
    console.log('state', state);
    console.log('id', id);
    // const target = event.target as HTMLSelectElement;
    // console.log(target);
    // const state = target.value as StateClient; // confirmed ou option, cancelled
    // console.log(state);

    const obj = this.http.get<Task>(`${this.url}/tasks/${id}`);
    this.taskService.changeState(obj, state).subscribe((data) => {
      Object.assign(item, data);
    });
  }
}
