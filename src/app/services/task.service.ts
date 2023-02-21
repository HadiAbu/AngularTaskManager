import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
/**
 * Services in Angular are the parts of the Client app that communicate
 * with the Server via APIs.
 * in other words, services in angular are where we are API requests
 */
export class TaskService {
  private getTasksUrl: string = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.getTasksUrl);
  }

  deleteTask(task: Task) {
    const taskIdUrl = `${this.getTasksUrl}/${task.id}`;
    return this.http.delete(taskIdUrl);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const taskIdUrl = `${this.getTasksUrl}/${task.id}`;
    return this.http.put<Task>(taskIdUrl, task, httpOptions);
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.getTasksUrl, task, httpOptions);
  }
}
