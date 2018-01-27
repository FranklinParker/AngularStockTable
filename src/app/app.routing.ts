import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StockComponent} from './shared/components/stock/stock.component';
import {CoursesComponent} from './shared/components/courses/courses.component';
import {DashboardComponent} from './shared/components/dashboard/dashboard.component';


const appRoutes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
