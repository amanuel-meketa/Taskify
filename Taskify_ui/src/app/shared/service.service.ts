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
          console.log('Added successful:', response);
        },
        error => {
          console.error('Error:', error);
        }
      );
  }
  
  getTasks(): Observable<any> {
    return this.http.get("http://localhost:5071/api/tasks");
  }

  editTask(id: any, task: Task) {
    console.log('Adding task:', task); 
    this.http.put(`http://localhost:5071/api/tasks/${id}`, task)
      .subscribe(
        response => {
          console.log('Updated successfully:', response);
        },
        error => {
          console.error('Error:', error);
        }
      );
  }

  deleteTasks(id: any): Observable<any> {
    return this.http.delete(`http://localhost:5071/api/tasks/${id}`);
  }
  
}
