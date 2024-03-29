import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { TodoApiService } from './../../service/todo-api.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  submitted = false;
  todoForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private todoApiService: TodoApiService
  ) {
    this.mainForm();
  }

  ngOnInit() {
  }

  mainForm() {
    this.todoForm = this.fb.group({
      Title: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      DueDate: ['', [Validators.required]],
      Done: ['']
    })
  }

  // Getter to access form control
  get myForm() {
    return this.todoForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.todoForm.valid) {
      return false;
    } else {
      this.todoForm.value.Done = false;
      this.dateDiff(this.todoForm.value.DueDate);                            //Call date diff function
      this.todoApiService.createTask(this.todoForm.value).subscribe(
        (res) => {
          console.log('Task successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/todo-list'))
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
