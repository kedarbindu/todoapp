import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { WeeklyRecurringTaskCreateComponent } from './components/weekly-recurring-task-create/weekly-recurring-task-create.component';
import { WeeklyRecurringTaskListComponent } from './components/weekly-recurring-task-list/weekly-recurring-task-list.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todo-list' },
  { path: 'create-task', component: TodoCreateComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'create-weeklyRecurringTask', component: WeeklyRecurringTaskCreateComponent },
  { path: 'weeklyRecurringTask-list', component: WeeklyRecurringTaskListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
