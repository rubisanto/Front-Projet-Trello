import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log('window', window.screen.height);
  }

  public goToAdd() {
    this.router.navigate(['add']);
  }
}
