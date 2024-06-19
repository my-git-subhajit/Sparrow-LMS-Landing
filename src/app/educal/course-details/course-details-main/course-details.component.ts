import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  courseid: string = '';
  course!: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseid = params['id'];
    });
    this.apiService.getCourse(this.courseid).subscribe({
      next: (data) => {
        console.log(data);
        this.course = data.course;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
