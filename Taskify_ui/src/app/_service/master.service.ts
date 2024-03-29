import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskPost } from '../../_model/taskPost';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getall(){
    return this.http.get<TaskPost[]>("http://localhost:5071/api/tasks");
  }
}
