// cart.routing.ts
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
    {
        path: 'cart', 
        component: CartComponent
    },
    {
        path: 'checkout', 
        component: CheckoutComponent
    }
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
export class CartRoutingModule {

}