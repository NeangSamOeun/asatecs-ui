import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {GalleriaModule} from 'primeng/galleria';
import {Card} from 'primeng/card';
import { VideosComponent } from './videos/videos.component';



@NgModule({
  declarations: [
    HomeComponent,
    VideosComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ]),
    CommonModule,
    GalleriaModule,
    Card
  ]
})
export class HomeModule { }
