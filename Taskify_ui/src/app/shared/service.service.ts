import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../mode/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  addTask(task: Task) {
    console.log('Adding task:', task); 
    this.http.post('http://localhost:5071/api/tasks', task)
      .subscribe(
        response => {
          console.log('Post successful:', response);
        },
        error => {
          console.error('Error:', error);
        }
      );
  }

  getTasks(): Observable<any> {
    return this.http.get("http://localhost:5071/api/tasks");
  }
}
