import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string = 'Task header';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .getSubjectAsObservable()
      .subscribe((val) => {
        this.showAddTask = val;
      });
  }
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
  hasRoute(route: string): Boolean {
    return this.router.url === route;
  }
}
