import {Component, OnInit} from '@angular/core';
import {SchoolService} from '../../services/school.service';
import {Student} from '../../models/student';
import {Course} from '../../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private schoolSerice: SchoolService) {
  }

  ngOnInit() {
    this.schoolSerice.geCourses().subscribe((courseList: Course[]) => {
      this.courses = courseList;

    });
  }

}
