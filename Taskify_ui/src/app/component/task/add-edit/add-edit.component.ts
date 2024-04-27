import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/mode/task';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private _fb: FormBuilder, private _service: ServiceService,
    private _dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.taskForm = this._fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: [null, Validators.required] // Initialize as null, mark as required
    });
  }
  ngOnInit(): void {
    this.taskForm.patchValue(this.data);
  }

  saveTask() {

    if (this.taskForm.valid) {
      const formData = this.taskForm.value;
      const task: Task = {
        title: formData.title,
        description: formData.description,
        dueDate: formData.dueDate
      };
      if (this.data) {
        this._service.editTask(this.data.id, task);
        alert('task created Sucessfully');
        this._dialogRef.close(true);
      } else {
        this._service.addTask(task);
        alert('task created Sucessfully');
        this._dialogRef.close(true);
      }
    } else {
      console.log('Form is not valid');
    }
  }

  discardChanges() {
    console.log('Discarding changes...');
    this.taskForm.reset();
  }
}
