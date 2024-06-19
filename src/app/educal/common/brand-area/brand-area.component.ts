import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-brand-area',
  templateUrl: './brand-area.component.html',
  styleUrls: ['./brand-area.component.scss'],
})
export class BrandAreaComponent implements OnInit {
  brandData = [
    {
      id: '1',
      img: 'https://assets.herovired.com/web_logo/img/amazon.png',
    },
    {
      id: '2',
      img: 'https://assets.herovired.com/web_logo/img/citibank.png',
    },
    {
      id: '3',
      img: 'https://assets.herovired.com/web_logo/img/infosys.png',
    },
    {
      id: '4',
      img: 'https://assets.herovired.com/web_logo/img/walmart.png',
    },
    {
      id: '5',
      img: 'https://assets.herovired.com/web_logo/img/Glodman-Sachs.webp',
    },
    {
      id: '6',
      img: 'https://assets.herovired.com/web_logo/img/Cogoport.webp',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
