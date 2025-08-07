import {Component} from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './app.topbar.component.html',
})
export class AppTopbarComponent {
  imageUrl = 'https://asatecs.com/wp-content/uploads/2025/07/Screenshot-2025-06-14-151206.png';
  menuItems = [
    { label: 'Product' },
    { label: 'IoT Application' },
    { label: 'Service and Support' },
    { label: 'Media and Resources' },
    { label: 'About Us' }
  ];
  languages = [
    { label: 'EN', value: 'en', flag: 'https://www.pa.gov/content/experience-fragments/copapwp-pagov/en/governor/flag-status/master/_jcr_content/root/container/columncontrol/columControl1/container/image.coreimg.png/1740154251902/640-flag-of-the-united-states.png' },
    { label: 'KH', value: 'kh', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/960px-Flag_of_Cambodia.svg.png' }
  ];
  selectedLanguage:any = [];

  constructor() {
  this.selectedLanguage = this.languages[0];

  }


}
