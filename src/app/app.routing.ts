import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartRoutingModule } from './cart/cart.routing';

// import { ProductModule } from './product/product.module';

// step 1: define the route configuration
// map path to component

const routes: Routes = [
    {
        // forward slash / not required, shall have error, since default it automatically
        path: '', 
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        // lazy loading and code spliting
        // product module code shall be split into differnt bundle product.product.module
        // the product module code shall be downloaded when user clicks product links
        path: 'products',
        loadChildren: () => import ("./product/product.module")
                                   .then (module => module.ProductModule)
    }
]


@NgModule({
    imports: [
        // step 2: import angular route configuration
        RouterModule.forRoot(routes),
        // other router module

        CartRoutingModule,
        // ProductModule,

        // not found page, keep this at end of routing
        RouterModule.forChild([
            {
                path: '**',
                component: NotFoundComponent
            }
        ])
    ],
    exports: [
        // because we have router-outlet, routerLink coming from router module
        RouterModule
    ]
})
export class AppRoutingModule {

}