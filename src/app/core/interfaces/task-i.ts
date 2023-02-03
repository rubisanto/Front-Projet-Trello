import { StateTask } from "../enums/state-task";

export interface TaskI {
  id: number;
  title: string;
  category: StateTask;
}
