import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from './layout/app.layout.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'asatecs', pathMatch: 'full' },
      {
        path: 'asatecs',
        loadChildren: () => import('./components/home-component/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: ()   => import('./components/product/product.module').then(m => m.ProductModule)
      }
    ],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
