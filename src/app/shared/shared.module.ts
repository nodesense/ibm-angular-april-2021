import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { PageLikeComponent } from './components/page-like/page-like.component';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  // all componennts, pipes and directives in declarations are 
  // meant to be used privately within shared module, not in outside modules
  declarations: [
    AddressComponent,
    PageLikeComponent,
    SortPipe,
    FilterPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule, // contains ngIf, ngFor, ngClass etc
  ],
  // making some/subset of components, pipes, directives public, for other module to use it
  exports: [
    // module, 
    // component, pipe, directive if we need to use outside module
    AddressComponent,
    PageLikeComponent,
    SortPipe,
    FilterPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
