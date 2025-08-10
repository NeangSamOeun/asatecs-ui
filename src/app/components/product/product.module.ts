import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ProductListComponent,ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'list', component: ProductListComponent},
      {path: 'detail/:id', component: ProductDetailComponent}
    ]),
    CommonModule
  ]
})
export class ProductModule { }
