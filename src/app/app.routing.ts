import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

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
    }
]


@NgModule({
    imports: [
        // step 2: import angular route configuration
        RouterModule.forRoot(routes)
    ],
    exports: [
        // because we have router-outlet, routerLink coming from router module
        RouterModule
    ]
})
export class AppRoutingModule {

}