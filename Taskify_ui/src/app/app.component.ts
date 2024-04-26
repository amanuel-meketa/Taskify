import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './component/task/add-edit/add-edit.component';
import { Task } from './mode/task';
import { ServiceService } from './shared/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Taskify_ui';
 constructor(private dialog:MatDialog, private _taskservice : ServiceService ){}
  ngOnInit(): void {
   this.getAllTask()
  }

 openAddEditTaskForm(){
  this.dialog.open(AddEditComponent)
 }

 getAllTask()
 {
  this._taskservice.getTasks().subscribe({
    next: (res) => {
      console.log(res);
    }, 
    error: console.log
  })
 }
}
