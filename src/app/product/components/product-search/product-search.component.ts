import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, FormControl, 
        Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import { ProductService } from '../../services/product.service';

import {map, filter, debounceTime} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

// custom validator
// terror, banned word list

// custom validator, curry function, a function that returns another function
function bannedWords(): ValidatorFn {
  // return a validator function
  // return a object with key/value, it means, invalid data {'bannedWords': true}
  // return null, it means valid data
  
  // function declartion: return type => {function body}
 // function declartion =  (control: AbstractControl)
 // return type = { [key: string]: any} | null either return [a object with key string and any value] or null 
  return (control: AbstractControl): { [key: string]: any} | null => {
    // control is a dom itself
    const value = control.value?.toLowerCase()
    if (value.indexOf("terror") >=0) {
      // return object means, invalid data
      return {
        'bannedWords': true
      }
    } else {
      return null; // no error
    }
  }
}

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  form: FormGroup; // group of form controls
  searchBox: FormControl;
  searchText: string = '' ; // the data shall be binded after cleaning the input

  products$: Observable<Product[]>; // async pipe shall subscribe

  constructor(private formBuilder: FormBuilder, 
              private productService: ProductService) { 

        this.searchBox = new FormControl("", [
                                                Validators.required,
                                                Validators.minLength(2),
                                                Validators.maxLength(20),
                                                bannedWords(), // custom validator
                                             ])
        this.form = formBuilder.group ({
          // bind name: the control
          "searchInput": this.searchBox
        })
  }

  ngOnInit(): void {
    this.searchBox.valueChanges
                  .pipe ( map ( (value: string) => value.trim().toLowerCase() ))
                  .pipe ( filter ( (value: string) => !!value)) // !!value mean, should be truthy
                  .pipe (debounceTime(500))
                  .subscribe ( value => {
                     console.log("*****"+value+"*****")
                     this.searchText = value;
                     this.products$ = this.productService.searchProducts(value);
                  });
  }

}
