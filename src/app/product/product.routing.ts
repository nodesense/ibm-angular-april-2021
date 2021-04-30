// product.routing.ts
 
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { CanEditGuard } from './guards/can-edit.guard';
import { SaveAlertGuard } from './guards/save-alert.guard';
import { AuthGuard } from '../auth/guards/auth.guard';
 
const routes: Routes = [
    {
        // path: 'products', 
        path: '', // since this is lazily loaded, the prefix /products comes from app.routing
        component: ProductHomeComponent,
        children: [
            {
                path: '', // localhost:4200/products default componnet within products 
                component: ProductListComponent
            },
            {
                path: 'create', // localhost:4200/products/create    
                component: ProductEditComponent,
                canDeactivate: [SaveAlertGuard],
                canActivate: [AuthGuard]
            },
            {
                path: 'edit/:id', // localhost:4200/products/edit/4343 
                component: ProductEditComponent,
                canActivate: [AuthGuard, CanEditGuard],
                canDeactivate: [SaveAlertGuard]
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