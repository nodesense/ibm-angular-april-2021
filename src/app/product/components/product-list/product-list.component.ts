import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/cart/models/cart-item';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, 
              private cartService: CartService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts()
      .subscribe( products => {
        console.log("Got products", products)
        this.products = products;
      })
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
                       .subscribe ( result => {
                          this.fetchProducts(); 
                       })
  }

  addToCart(product: Product) {
    const item = new CartItem(product.id, product.name, product.price, 1);
    this.cartService.addItem(item)
  }
}
