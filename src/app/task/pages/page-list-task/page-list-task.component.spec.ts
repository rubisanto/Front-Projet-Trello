import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListTaskComponent } from './page-list-task.component';

describe('PageListTaskComponent', () => {
  let component: PageListTaskComponent;
  let fixture: ComponentFixture<PageListTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
