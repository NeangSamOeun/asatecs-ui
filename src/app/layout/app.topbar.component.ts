import {Component, OnDestroy, OnInit} from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { LangService } from '../core/service/LangService';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './app.topbar.component.html',
})
export class AppTopbarComponent implements OnInit, OnDestroy {
  menuItems: MenuItem[] = [];
  private sub = new Subscription();

  languages: any[] = [
    { label: 'EN', value: 'en', flag: 'assets/images/flags/en.png' },
    { label: 'KH', value: 'km', flag: 'assets/images/flags/kh.png' }
  ];
  selectedLanguage: any = this.languages[0];
  constructor(private t: TranslocoService, private lang: LangService) {}

  ngOnInit() {
    const saved = (localStorage.getItem('lang')) || 'en';

    // 1) Ensure EN is loaded and shown first
    this.t.load('en').subscribe(() => {
      this.t.setActiveLang('en');
      this.buildMenuItems();

      // 2) If saved is not EN, load it first, then switch & rebuild
      if (saved !== 'en') {
        this.switchLang(saved);
        this.selectedLanguage =
          this.languages.find(l => l.value === saved) ?? this.languages[0];
      }
    });

    // Rebuild only after the active lang’s JSON is loaded successfully
    this.sub.add(
      this.t.events$
        .pipe(
          filter(
            (e: any) =>
              e.type === 'translationLoadSuccess' &&
              e.payload?.lang === this.t.getActiveLang()
          )
        )
        .subscribe(() => this.buildMenuItems())
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private switchLang(lang: any) {
    // Load JSON -> activate -> rebuild
    this.t.load(lang).subscribe(() => {
      this.lang.set(lang);           // sets active + saves to localStorage
      this.buildMenuItems();         // safe: translations are now in memory
    });
  }

  private buildMenuItems() {
    this.menuItems = [
      { label: this.t.translate('PRODUCT'), routerLink: '/products/list' },
      { label: this.t.translate('IOT_APP') },
      { label: this.t.translate('SERVICE') },
      { label: this.t.translate('MEDIA') },
      { label: this.t.translate('ABOUT') },
    ];
  }

  onLanguageChange(e: any) {
    const lang = e?.value?.value;
    if (!lang) return;
    this.selectedLanguage = this.languages.find(l => l.value === lang) ?? this.languages[0];
    this.switchLang(lang);
  }
}


