import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { RouterOutlet } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import {
  translocoConfig,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  TRANSLOCO_TRANSPILER,
  TRANSLOCO_MISSING_HANDLER,
  TRANSLOCO_INTERCEPTOR,
  TRANSLOCO_FALLBACK_STRATEGY,
  DefaultTranspiler,
  DefaultMissingHandler,
  TranslocoModule,
  TranslocoLoader,
  TranslocoInterceptor,
  TranslocoFallbackStrategy
} from '@jsverse/transloco';

/** HttpClient-based loader: loads /assets/i18n/{lang}.json */
@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}
  getTranslation(lang: string) {
    return this.http.get(`assets/i18n/${lang}.json`);
  }
}

/** Interceptor — pass-through (safe default) */
@Injectable({ providedIn: 'root' })
export class PassThroughTranslocoInterceptor implements TranslocoInterceptor {
  preSaveTranslation(translation: any, lang: string) { return translation; }
  preSaveTranslationKey(key: string) { return key; }
  preRender() { /* no-op */ }
}

/** Fallback strategy — try current lang, then English */
@Injectable({ providedIn: 'root' })
export class AppFallbackStrategy implements TranslocoFallbackStrategy {
  getNextLangs(lang: string): string[] {
    return lang === 'en' ? ['en'] : [lang, 'en'];
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    RouterOutlet,
    TranslocoModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: Aura } }),

    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'km'],   // ✅ correct ISO code
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: true
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    { provide: TRANSLOCO_TRANSPILER, useClass: DefaultTranspiler },
    { provide: TRANSLOCO_MISSING_HANDLER, useClass: DefaultMissingHandler },
    { provide: TRANSLOCO_INTERCEPTOR, useClass: PassThroughTranslocoInterceptor },
    { provide: TRANSLOCO_FALLBACK_STRATEGY, useClass: AppFallbackStrategy } // ✅ fixes your new error
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
