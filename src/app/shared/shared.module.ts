import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SchoolService} from './services/school.service';
import {HttpClientModule} from '@angular/common/http';
import {CoursesComponent} from './components/courses/courses.component';
import {HighlightDirective} from './directive/highlight.directive';
import {StockService} from './services/stock.service';
import {StockComponent} from './components/stock/stock.component';
import {DateFormaterPipe} from './pipe/date-formater.pipe';
import {CapitializeFirstLeterPipe} from './pipe/capitialize-first-leter.pipe';
import {FormsModule} from '@angular/forms';
import {EmployeePipe} from './pipe/employee.pipe';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule,
    RouterModule.forChild([]),
  ],
  declarations: [CoursesComponent,
    HighlightDirective,
    StockComponent,
    DateFormaterPipe,
    CapitializeFirstLeterPipe,
    EmployeePipe,
    NavbarComponent,
    DashboardComponent],
  providers: [SchoolService, StockService],
  exports: [CoursesComponent,
    StockComponent,
    CapitializeFirstLeterPipe,
    EmployeePipe,
    NavbarComponent,
    DashboardComponent]
})
export class SharedModule {
}
