import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateTask } from 'src/app/core/enums/state-task';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() label!: string;
  public categories = Object.values(StateTask);
  public taskForm!: FormGroup;
  @Input() obj!: Task;
  // Output pour sortir les données et les donner à un parent
  @ Output() submited: EventEmitter<Task> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: [this.obj.title, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      category: [this.obj.category],
      id: [this.obj.id]
  });

  }
  public onSubmit(){
    this.submited.emit(this.taskForm.value);
  }
}

