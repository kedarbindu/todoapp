import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyRecurringTaskListComponent } from './weekly-recurring-task-list.component';

describe('WeeklyRecurringTaskListComponent', () => {
  let component: WeeklyRecurringTaskListComponent;
  let fixture: ComponentFixture<WeeklyRecurringTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyRecurringTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyRecurringTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
