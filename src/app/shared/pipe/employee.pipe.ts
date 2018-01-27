import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from '../models/Employee';

@Pipe({
  name: 'employee'
})
export class EmployeePipe implements PipeTransform {

  transform(employee: Employee, args?: any): any {
    return employee.firstName.charAt(0).toUpperCase() + employee.firstName.slice(1)
      + ' ' +  employee.lastName.charAt(0).toUpperCase() + employee.lastName.slice(1);
  }

}
