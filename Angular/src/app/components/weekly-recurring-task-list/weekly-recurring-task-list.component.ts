import { Component, OnInit } from '@angular/core';
import { WeeklyrecurringtaskApiService } from 'src/app/service/weeklyrecurringtask-api.service';

@Component({
  selector: 'app-weekly-recurring-task-list',
  templateUrl: './weekly-recurring-task-list.component.html',
  styleUrls: ['./weekly-recurring-task-list.component.css']
})
export class WeeklyRecurringTaskListComponent implements OnInit {
  weeklyRecurringTasks: any = [];
  showAllweeklyRecurringTasks = false;
  constructor(private weeklyRecurringTaskAPIService: WeeklyrecurringtaskApiService) {
    this.getAllTasks();
  }

  ngOnInit() {
  }

  showAllTasksInGrid(flag: boolean) {
    this.showAllweeklyRecurringTasks = flag;
    this.getAllTasks();
  }

  getAllTasks() {
    if (this.showAllweeklyRecurringTasks) {
      this.weeklyRecurringTaskAPIService.getweeklyRecurringTasks().subscribe((data) => {
        this.weeklyRecurringTasks = data;
        console.log(this.weeklyRecurringTasks)
      });
    }
    else {
      this.weeklyRecurringTaskAPIService.getOpenTasks().subscribe((data) => {
        this.weeklyRecurringTasks = data;
      });
    }
  }

  openTask(task, index) {
    task.Done = false;
    this.updateTask(task, index);
  }

  completeTask(task, index) {
    task.Done = true;
    this.updateTask(task, index);
  }

  updateTask(task, index) {
    if (window.confirm('Are you sure?')) {
      this.weeklyRecurringTaskAPIService.updateTask(task._id, task).subscribe((data) => {
        this.getAllTasks();
      }
      )
    }
  }

}
