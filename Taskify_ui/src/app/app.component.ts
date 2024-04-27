import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './component/task/add-edit/add-edit.component';
import { ServiceService } from './shared/service.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Task } from './mode/task';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'dueDate', 'status', 'action'];
  dataSource!: MatTableDataSource<Task>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _taskservice: ServiceService) { }
  ngOnInit(): void {
    this.getAllTask()
  }

  openAddEditTaskForm() {
   const resulet = this._dialog.open(AddEditComponent);
   resulet.afterClosed().subscribe({
    next: (val) => {
      this.getAllTask();
    },
   })
  }

  getAllTask() {
    this._taskservice.getTasks().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(res);
      },
      error: console.log
    })
  }

  openEditTaskForm(task: Task) {
    this._dialog.open(AddEditComponent, {
      data: task
    });
  }

  deleteTask(id: any) {
    this._taskservice.deleteTasks(id).subscribe({
      next: (res) => {
        alert('task deleted sucessfully');
        this.getAllTask();
      },
      error: console.log
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
