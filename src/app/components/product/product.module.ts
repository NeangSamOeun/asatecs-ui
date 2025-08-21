import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RouterModule} from '@angular/router';
import {Accordion, AccordionTab} from "primeng/accordion";
import {Checkbox} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import {PrimeTemplate} from 'primeng/api';
import {ButtonDirective} from 'primeng/button';
import {Card} from 'primeng/card';
import {Tag} from 'primeng/tag';
import {Breadcrumb} from 'primeng/breadcrumb';
import {InputText} from 'primeng/inputtext';
import {ProgressSpinner} from 'primeng/progressspinner';
import {Paginator} from 'primeng/paginator';
import {TranslocoPipe} from '@jsverse/transloco';
import {Image} from "primeng/image";

@NgModule({
  declarations: [
    ProductListComponent,ProductDetailComponent
  ],
    imports: [
        RouterModule.forChild([
            {path: 'list', component: ProductListComponent},
            {path: 'detail/:id', component: ProductDetailComponent}
        ]),
        CommonModule,
        Accordion,
        AccordionTab,
        Checkbox,
        FormsModule,
        PrimeTemplate,
        ButtonDirective,
        Card,
        Tag,
        Breadcrumb,
        InputText,
        ProgressSpinner,
        Paginator,
        TranslocoPipe,
        Image,
    ]
})
export class ProductModule { }
