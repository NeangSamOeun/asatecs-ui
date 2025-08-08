import {Component} from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './app.topbar.component.html',
})
export class AppTopbarComponent {
  imageUrl = 'assets/images/logo.png';
  menuItems = [
    { label: 'Product' },
    { label: 'IoT Application' },
    { label: 'Service and Support' },
    { label: 'Media and Resources' },
    { label: 'About Us' }
  ];
  languages = [
    { label: 'EN', value: 'en', flag: 'assets/images/flags/en.png' },
    { label: 'KH', value: 'kh', flag: 'assets/images/flags/kh.png' },
  ];
  selectedLanguage:any = [];

  constructor() {
  this.selectedLanguage = this.languages[0];

  }


}
