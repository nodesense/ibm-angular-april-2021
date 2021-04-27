# ProductApp

to clone the repo,

```
git clone https://github.com/nodesense/ibm-angular-april-2021

cd ibm-angular-april-2021

npm install


ng serve


```


In VSCode, View Menu, Terminal Menu Item...

```

ng generate component components/home

ng g  c components/about

ng g  c components/contact

ng g  c components/not-found

ng g  c components/header

ng g  c components/footer

```


```
    shared module - shared across all application  module
    cart module - feature specific
    product module - feature 
    order module - feature
    auth - feature
```

```
    ng g module shared

    ng g c shared/components/address
    ng g c shared/components/page-like
    ng g pipe shared/pipes/sort
    ng g pipe shared/pipes/filter
    ng g directive shared/directives/highlight
    ng g interface shared/models/address
    
```

```
 ng g module cart

 ng g c cart/components/cart
 ng g c cart/components/checkout
 ng g c cart/components/cart-list
 ng g c cart/components/cart-summary

 ng g service cart/services/cart
 ng g class cart/models/cart-item

```


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
