import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';

import {FormsModule} from '@angular/forms';
import { CartModule } from './cart/cart.module';
import { AppRoutingModule } from './app.routing';

import {HttpClientModule} from '@angular/common/http';

// logically collection of componnents, pipes and directives, associated services
// a module may have dependencies to another module
// angular loads modules first

@NgModule({
    imports: [
        // all other module dependencies used here
        BrowserModule, // all browser specific implementation
        SharedModule,
        FormsModule,
        CartModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        // consist of all componnents, pipes, directives belong to this module
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        NotFoundComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [
        // the first component that should loaded into app
        AppComponent
    ]
})
export class AppModule {
    constructor() {
        console.log('AppModule created')
    }
}