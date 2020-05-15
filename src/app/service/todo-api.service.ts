import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  baseUri:string = 'http://localhost:5000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  // Create
  createTask(data): Observable<any> {
    let url = this.baseUri + '/todos';
    data.Done = false;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all tasks
  getTasks() {
    return this.http.get(this.baseUri + '/todos');
  }

  // Get all open tasks
  getOpenTasks() {
    return this.http.get(this.baseUri + '/todos/open');
  }

  // Update task
  updateTask(id, data): Observable<any> {
    let url = this.baseUri + '/todos/' + id;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
