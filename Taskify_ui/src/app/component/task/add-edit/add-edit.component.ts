import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/mode/task';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: [null, Validators.required] // Initialize as null, mark as required
    });
  }

  saveTask() {
    console.log('Saving task...');
    if (this.taskForm.valid) { // Check if the form is valid
      const formData = this.taskForm.value;
      const task: Task = {
        title: formData.title,
        description: formData.description,
        dueDate: formData.dueDate
      };
      console.log(task);
      this.service.addTask(task);
    } else {
      console.log('Form is not valid');
    }
  }
  
  discardChanges() {
    console.log('Discarding changes...');
    this.taskForm.reset();
  }
}
