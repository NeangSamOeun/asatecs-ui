import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images: any[] = [
    {
      itemImageSrc: 'assets/images/slider/img1.png',
      alt: 'Description 1',
      title: 'Title 1'
    },
    {
      itemImageSrc: 'assets/images/slider/img2.png',
      alt: 'Description 2',
      title: 'Title 2'
    },
  ];

  responsiveOptions: any[] = [
    {breakpoint: '1024px', numVisible: 3},
    {breakpoint: '768px', numVisible: 2},
    {breakpoint: '560px', numVisible: 1}
  ];


}
