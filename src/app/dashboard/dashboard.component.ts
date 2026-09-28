import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  isLogin(): boolean {
    const firstName = localStorage.getItem('fname');
    return firstName !== 'null' && firstName !== null;
  }
}