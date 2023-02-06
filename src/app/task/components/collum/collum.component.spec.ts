import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollumComponent } from './collum.component';

describe('CollumComponent', () => {
  let component: CollumComponent;
  let fixture: ComponentFixture<CollumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
