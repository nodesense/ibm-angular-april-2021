import {Component, OnInit} from '@angular/core';
/*
    no need to write comments
    Componenet has 
        TS - Logic
        HTML - View
        Scopped Styles - SCSS 
        +
        Selector - Component html tag name
        Model - Data that binds to view as member variable of component
*/

@Component({
    selector: 'app-root', // <app-root> in html
    templateUrl: './app.component.html', // VIEW 
    styleUrls: [
        './app.component.scss'
    ]
})
export class AppComponent implements OnInit {
    // member variable
    // model / data to bind to view
    appTitle = "Product App"
    constructor() {
        console.log('AppComponent created')
    }

    // life cycle method, called after the HTML is mounted/rendered into browser
    // first time
    ngOnInit() {
        console.log('AppComponent ngOnInit')
    }
}