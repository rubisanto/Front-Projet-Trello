import { Component, Input, OnInit } from '@angular/core';
import { StateTask } from 'src/app/core/enums/state-task';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title!: string;
  @Input() category!: StateTask;
  public categories = Object.values(StateTask);

  constructor() {}

  ngOnInit(): void {}

}
