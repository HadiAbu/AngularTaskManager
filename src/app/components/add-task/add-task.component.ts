import { Subscription } from 'rxjs';
import { Task } from './../../Task';
import { Component, EventEmitter, Output } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  day!: string;
  text!: string;
  reminder!: Boolean;
  subscription: Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  showAddTask: Boolean = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .getSubjectAsObservable()
      .subscribe((val) => {
        this.showAddTask = val;
      });
  }
  onSubmit() {
    if (!this.text) {
      alert('Please add task name');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.text = '';
    this.day = '';
    this.reminder = false;

    this.toggleShowForm();
    this.onAddTask.emit(newTask);
  }
  toggleShowForm() {
    this.uiService.toggleAddTask();
  }
}
