import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-collum',
  templateUrl: './collum.component.html',
  styleUrls: ['./collum.component.scss']
})
export class CollumComponent implements OnInit {
  @Input() colTitle!: string;
  @Input() col!: Task[];
  @Input() emptyText!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
