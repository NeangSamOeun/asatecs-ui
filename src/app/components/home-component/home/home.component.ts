import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images: any[] = [
    {
      itemImageSrc: 'https://ps.w.org/ml-slider/assets/banner-1544x500.png?rev=2907610',
      thumbnailImageSrc: 'assets/images/thumb1.jpg',
      alt: 'Description 1',
      title: 'Title 1'
    },
    {
      itemImageSrc: 'https://ps.w.org/image-slider-widget/assets/banner-772x250.png?rev=1674939',
      thumbnailImageSrc: 'assets/images/thumb2.jpg',
      alt: 'Description 2',
      title: 'Title 2'
    },
    // Add more objects as needed
  ];

  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 }
  ];


}
