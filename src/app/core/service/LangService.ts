import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

export type AppLang = 'en' | 'km';

@Injectable({ providedIn: 'root' })
export class LangService {
  constructor(private transloco: TranslocoService) {}

  private normalize(lang: string | null | undefined): AppLang {
    // accept 'kh' from older code but convert to 'km'
    const v = (lang || '').toLowerCase();
    return v === 'km' || v === 'kh' ? 'km' : 'en';
  }

  getSaved(): AppLang {
    return this.normalize(localStorage.getItem('lang'));
  }

  set(lang: AppLang) {
    const normalized = this.normalize(lang);
    this.transloco.setActiveLang(normalized);
    localStorage.setItem('lang', normalized);
  }
}
