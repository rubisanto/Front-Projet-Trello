import { StateTask } from '../enums/state-task';
import { TaskI } from '../interfaces/task-i';

export class Task implements TaskI {
  // ! : la valeur n'est pas définie
  id!: number;
  title!: string;
  category = StateTask.TODO;

  constructor(obj?: Partial<Task>) {
    if (obj) {
      Object.assign(this, obj); // Fusionne l'objet avec la task déjà présente. 
    }
  }
}
