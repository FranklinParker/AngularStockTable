import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';
import {Student} from '../models/student';
import {Course} from '../models/course';


@Injectable()
export class SchoolService {
  apiUrl = environment.apiUrl;


  constructor(private httpClient: HttpClient) {

  }

  geCourses(): Observable<Course[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.get(this.apiUrl + 'courses') //,
     // {headers: headers})
      .map((courses: Course []) => {
        const courseList: Course[] = [];
        courses.forEach((course: Course) =>
           courseList.push(new Course(course.courseName, course.professor, course.classSchedule)));
        return courseList;
      });

  }

}
