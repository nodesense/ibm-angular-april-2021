// product.routing.ts
 
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
 
const routes: Routes = [
    {
        path: 'products', 
        component: ProductHomeComponent,
        children: [
            {
                path: '', // localhost:4200/products default componnet within products 
                component: ProductListComponent
            },
            {
                path: 'create', // localhost:4200/products/create    
                component: ProductEditComponent
            },
            {
                path: 'edit/:id', // localhost:4200/products/edit/4343 
                component: ProductEditComponent
            },
            {
                path: 'search', // localhost:4200/products/search 
                component: ProductSearchComponent
            },
        ]
    },
   
]

@NgModule({
    imports: [
         RouterModule.forChild(routes), 
    ],
    exports: [
        // because we have router-outlet, routerLink coming from router module
        RouterModule
    ]
})
export class ProductRoutingModule {

}