import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-two',
  templateUrl: './blog-two.component.html',
  styleUrls: ['./blog-two.component.scss'],
})
export class BlogTwoComponent implements OnInit {
  blogItems = [
    {
      id: 1,
      blogImg: 'https://assets.herovired.com/web_logo/img/walmart.png',
      title:
        'Hero Vired has played a pivotal part in the development of my career trajectory. I come from an engineering background so making a move to the Finance field was not the easiest. The faculty made sure that this transition was smooth.',
      authorImg: 'assets/img/course/teacher/teacher-1.jpg',
      authorName: 'Jim Séchen',
      category: 'Risk Analyst',
      date: 'April 02, 2022',
      color: 'green',
    },
    {
      id: 2,
      blogImg: 'https://assets.herovired.com/web_logo/img/amazon.png',
      title:
        'I feel ecstatic to have received an incredible offer to work with an esteemed organization like JM Financials Ltd. I want to take this opportunity to express my gratitude to the Faculty and Career Services Team.',
      authorImg: 'assets/img/course/teacher/teacher-2.jpg',
      authorName: 'Barry Tone',
      category: 'Financial Analyst',
      date: 'January 05, 2022',
      color: 'sky-blue',
    },
    {
      id: 3,
      blogImg: 'https://assets.herovired.com/web_logo/img/Glodman-Sachs.webp',
      title:
        'I was impressed by the concepts, presentation skills, & case analysis approach. During face-to-face lectures & conversations, meetings, & assignments, I understood everything in a much broader way.',
      authorImg: 'assets/img/course/teacher/teacher-3.jpg',
      authorName: 'Samuel Serif',
      category: 'Business Analyst',
      date: 'February 08, 2022',
      color: 'green',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
