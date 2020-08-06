import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todo-list' },
  { path: 'create-task', component: TodoCreateComponent },
  { path: 'todo-list', component: TodoListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
