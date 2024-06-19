import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {
  courses: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses() {
    this.apiService.getCourses().subscribe({
      next: (data) => {
        console.log(data);
        this.courses = this.transformCourseData(data.courses);
        console.log(this.courses);
      },
      error: (err) => {},
    });
  }
  transformCourseData(data: any) {
    let transformCourseData = [];
    for (let item of data) {
      let resData: any = {};
      resData.teacherName =
        item.instructors[0].firstname + ' ' + item.instructors[0].lastname;
      resData.teacherImg = item.instructors[0].profilePicture;
      resData.category = item.tags[0][0];
      resData.title = item.name;
      resData.price = item.price;
      resData.rating = item.rating;
      resData.courseImage = item.thumbnail;
      resData.id = item._id;
      resData.lesson = item.modules.reduce((acc: any, cv: any) => {
        console.log(acc);
        return acc + cv.content.length;
      }, 0);
      transformCourseData.push(resData);
    }
    return transformCourseData;
  }
}
