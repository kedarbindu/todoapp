import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WeeklyrecurringtaskApiService } from 'src/app/service/weeklyrecurringtask-api.service';

@Component({
  selector: 'app-weekly-recurring-task-create',
  templateUrl: './weekly-recurring-task-create.component.html',
  styleUrls: ['./weekly-recurring-task-create.component.css']
})
export class WeeklyRecurringTaskCreateComponent implements OnInit {
  submitted = false;
  weeklyRecurringTaskForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private weeklyrecurringtaskApiService: WeeklyrecurringtaskApiService
  ) {
    this.mainForm();
  }

  ngOnInit() {
  }

  mainForm() {
    this.weeklyRecurringTaskForm = this.fb.group({
      Title: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      DueDate: ['', [Validators.required]],
      Done: [''],
      RecursOn: ['', [Validators.required]]
    })
  }

  // Getter to access form control
  get myForm() {
    return this.weeklyRecurringTaskForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.weeklyRecurringTaskForm.valid) {
      return false;
    } else {
      this.weeklyRecurringTaskForm.value.Done = false;
      this.dateDiff(this.weeklyRecurringTaskForm.value.DueDate);                            //Call date diff function
      this.weeklyrecurringtaskApiService.createWeeklyRecurringTask(this.weeklyRecurringTaskForm.value).subscribe(
        (res) => {
          console.log('Task successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/weeklyRecurringTask-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

  //Find difference between 2 dates
  dateDiff(dueDate) {
    var currentDate = new Date();
    var newDueDate = new Date(dueDate);
    var diff = Math.abs(newDueDate.getTime() - currentDate.getTime());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    console.log("Date difference between task's due date and current date is - ", diffDays);
  }
}
