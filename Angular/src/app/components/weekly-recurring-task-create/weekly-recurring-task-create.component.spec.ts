import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyRecurringTaskCreateComponent } from './weekly-recurring-task-create.component';

describe('WeeklyRecurringTaskCreateComponent', () => {
  let component: WeeklyRecurringTaskCreateComponent;
  let fixture: ComponentFixture<WeeklyRecurringTaskCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyRecurringTaskCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyRecurringTaskCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
