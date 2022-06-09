import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeeklyrecurringtaskApiService {
  baseUri: string = 'http://localhost:5000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  //Create weekly recurring task
  createWeeklyRecurringTask(data): Observable<any> {
    let url = this.baseUri + '/weeklyRecurringTasks';
    data.Done = false;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  //Get all weekly recurring tasks
  getweeklyRecurringTasks() {
    return this.http.get(this.baseUri + '/weeklyRecurringTasks');
  }

  // Get all open tasks
  getOpenTasks() {
    return this.http.get(this.baseUri + '/weeklyRecurringTask/open');
  }

  // Update task
  updateTask(id, data): Observable<any> {
    let url = this.baseUri + '/weeklyRecurringTask/' + id;
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
