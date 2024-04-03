import { Component } from '@angular/core';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent {
  task: any = {}; 

  discardChanges() {
    this.task = {};
  }

  saveChanges() {
  }
}
