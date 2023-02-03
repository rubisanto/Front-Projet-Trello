import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/core/models/task';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private collection$!: Observable<Task[]>;
  private url = environment.urlApi;



  constructor(private http: HttpClient) {
    // console.log(this.url);

    this.collection$ = this.http.get<Task[]>(`${this.url}/tasks`);
    // console.log(this.collection$);
   }

  public get collection(): Observable<Task[]> {
    return this.collection$;
  }

  public set collection(col) {
    this.collection$ = col;
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