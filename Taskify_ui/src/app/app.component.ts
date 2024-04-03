import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './component/task/add-edit/add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taskify_ui';
 constructor(private dialog:MatDialog){}

 openAddEditTaskForm(){
  this.dialog.open(AddEditComponent)
 }
}
