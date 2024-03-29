import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../_service/master.service';
import { TaskPost } from '../../../_model/taskPost';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit {
  constructor(private service: MasterService) {
  }
  todos!: TaskPost[];
  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.service.getall().subscribe(item => {
    this.todos = item;
    console.log(this.todos);
    });
  }
}