import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  // ActivatedRoute - to get the url params :id
  // Router, to navigate one page to another programmatically

  @ViewChild("productForm", {static: true})
  productForm: NgForm;

  product: Product = new Product(); // create product

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private productService: ProductService) { }

  ngOnInit(): void {
    // get id from url
    const id = this.route.snapshot.params['id'];
    if (id) {
      console.log('id is ', id)
      this.productService.getProduct(id)
                         .subscribe (product => {
                           this.product = product;
                         })
    }else {
      console.log('create page')
    }
  }

  saveProduct() {
    if (this.productForm.pristine) {
      alert('no changes found');
      return;
    }

    console.log("product data ", this.product)
    this.productService.saveProduct(this.product)
                        .subscribe( product => {
                           console.log("updated product ", product);
                           this.product = product; // good pratice
                           // this.router.navigateByUrl("/products"); // go to list page
                        })
  }

}
