import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: Boolean = false;
  // A subject is an observable that can multicast i.e. talk to many observers.
  private subject = new Subject<any>();

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  getSubjectAsObservable(): Observable<any> {
    return this.subject.asObservable();
  }
}
