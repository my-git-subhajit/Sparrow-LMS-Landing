import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses-page-courses-area',
  templateUrl: './courses-page-courses-area.component.html',
  styleUrls: ['./courses-page-courses-area.component.scss'],
})
export class CoursesPageCoursesAreaComponent implements OnInit {
  @Input() courses: any;
  constructor() {}

  ngOnInit(): void {}
}
