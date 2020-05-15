import { Component, OnInit } from '@angular/core';
import { TodoApiService } from './../../service/todo-api.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  Tasks:any = [];
  showAllTasks = false;

  constructor(private todoApiService: TodoApiService) { 
    this.getAllTasks();
  }

  ngOnInit() {
  }

  showAllTasksInGrid(flag:boolean) {
    this.showAllTasks = flag;
    this.getAllTasks();
  }

  getAllTasks(){
    if(this.showAllTasks){
      this.todoApiService.getTasks().subscribe((data) => {
        this.Tasks = data;
       });
    }
    else{
      this.todoApiService.getOpenTasks().subscribe((data) => {
        this.Tasks = data;
       });
    }
        
  }

  getAllOpenTasks() {
    
  }

  openTask(task, index){
    task.Done = false;
    this.updateTask(task, index);
  }

  completeTask(task, index){
    task.Done = true;
    this.updateTask(task, index);
  }

  updateTask(task, index){
    if(window.confirm('Are you sure?')) {
      this.todoApiService.updateTask(task._id, task).subscribe((data) => {
        this.getAllTasks();
      }
    )    
  }
  }

}
