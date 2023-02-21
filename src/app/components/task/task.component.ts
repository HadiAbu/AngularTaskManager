import { TaskService } from './../../services/task.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() onDeleteClick: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  // component state vars:
  icon = faTimes;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  deletHandler(task: Task | undefined) {
    task && this.taskService.deleteTask(task);
    this.onDeleteClick.emit(task);
  }
  onToggle(task: Task | undefined) {
    task && this.taskService.updateTaskReminder(task);
    this.onToggleReminder.emit(task);
  }
}
