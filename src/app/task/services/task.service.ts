import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from 'src/app/core/models/task';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StateTask } from 'src/app/core/enums/state-task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private collection$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([])
  private url = environment.urlApi;

  constructor(private http: HttpClient) {
    // console.log(this.url);

    this.refreshCollection();
    // console.log(this.collection$);
  }

  public refreshCollection() {
    this.http.get
  }

  public get collection(): Observable<Task[]> {
    return this.collection$;
  }

  // public set collection(col: Observable<Task[]>) {
  //   this.collection$ = col;
  // }
  public changeState(item: Task, state: StateTask): Observable<Task> {
    const obj = new Task(item);
    obj.category = state;
    return this.update(obj);
  }

  public update(obj: Task): Observable<Task>{
    return this.http.put<Task>(`${this.url}/tasks/${obj.id}`, obj)
  }
  // possibilités de faire des méthodes pour récupérer les données
  // public getItemTodo(): Observable<Task[]> {
  //   return this.http.get<Task[]>(`${this.url}/tasks?category=TODO`);
  // }

  // public getItemInProgress(): Observable<Task[]> {
  //   return this.http.get<Task[]>(`${this.url}/tasks?category=IN_PROGRESS`);
  // }

  // public getItemDone(): Observable<Task[]> {
  //   return this.http.get<Task[]>(`${this.url}/tasks?category=DONE`);
  // }

  // public getItemBlocked(): Observable<Task[]> {
  //   return this.http.get<Task[]>(`${this.url}/tasks?category=BLOCKED`);
  // }
}
