import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppTopbarComponent } from './app.topbar.component';
import { AppMenuComponent } from './app.menu.component';
import { AppFooterComponent } from './app.footer.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppLayoutComponent } from './app.layout.component';
import {Menubar} from 'primeng/menubar';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {ButtonDirective} from 'primeng/button';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {TranslocoPipe} from '@jsverse/transloco';

@NgModule({
  declarations: [
    AppTopbarComponent,
    AppMenuitemComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppLayoutComponent,
  ],
  imports: [
    CommonModule,
    Menubar,
    DropdownModule,
    FormsModule,
    ButtonDirective,
    RouterOutlet,
    FloatLabel,
    InputText,
    RouterLink,
    TranslocoPipe,
  ],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
