import { Component, OnInit } from '@angular/core';
import { WeeklyRecurringTaskListComponent } from '../weekly-recurring-task-list/weekly-recurring-task-list.component';
import { TodoApiService } from './../../service/todo-api.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  Tasks: any = [];
  showAllTasks = false;
  todoTasks: any = [];
  recurringTasks: any = [];

  constructor(private todoApiService: TodoApiService, private weeklyRecurringTaskComponent: WeeklyRecurringTaskListComponent
  ) {
    this.getAllTasks();
  }

  ngOnInit() {
  }

  showAllTasksInGrid(flag: boolean) {
    this.showAllTasks = flag;
    this.getAllTasks();
    this.delayedTasks();
  }

  getAllTasks() {
    if (this.showAllTasks) {
      this.todoApiService.getTasks().subscribe((data) => {
        this.Tasks = data;
      });
    }
    else {
      this.todoApiService.getOpenTasks().subscribe((data) => {
        this.Tasks = data;
      });
    }

  }

  getAllOpenTasks() {

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
      this.todoApiService.updateTask(task._id, task).subscribe((data) => {
        this.getAllTasks();
      }
      )
    }
  }

  //Filter delayed tasks
  delayedTasks() {
    //For todo list
    this.Tasks.forEach(task => {
      var currentDate = new Date();
      var newDueDate = new Date(task.DueDate);
      var diffDays = newDueDate.getDate() - currentDate.getDate();
      if (diffDays < 0) {
        this.todoTasks.push(task);
      }
    });

    //For weekly recurring tasks
    this.weeklyRecurringTaskComponent.weeklyRecurringTasks.forEach(task => {
      var currentDate = new Date();
      var newDueDate = new Date(task.DueDate);
      var diffDays = newDueDate.getDate() - currentDate.getDate();
      if (diffDays < 0) {
        this.recurringTasks.push(task);
      }
    });
    console.log(this.todoTasks, "********************", this.recurringTasks)
  }
}
