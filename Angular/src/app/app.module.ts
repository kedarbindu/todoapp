import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoApiService } from './service/todo-api.service';
import { WeeklyRecurringTaskCreateComponent } from './components/weekly-recurring-task-create/weekly-recurring-task-create.component';
import { WeeklyrecurringtaskApiService } from './service/weeklyrecurringtask-api.service';
import { WeeklyRecurringTaskListComponent } from './components/weekly-recurring-task-list/weekly-recurring-task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoCreateComponent,
    WeeklyRecurringTaskCreateComponent,
    WeeklyRecurringTaskListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoApiService,
    WeeklyrecurringtaskApiService,
    WeeklyRecurringTaskListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
