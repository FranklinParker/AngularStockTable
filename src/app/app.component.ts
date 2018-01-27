import {Component} from '@angular/core';
import {Employee} from './shared/models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date();
  employee = new Employee('joe', 'smith');
  title = 'app';
  clickBath() {
    console.log('clicked bath');
  }
}
