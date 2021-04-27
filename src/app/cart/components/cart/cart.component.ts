import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // Dependency Injection, injecting cart service into cart component
  // if cartService not created before, angular will create CartService instance and inject it
  // if cartService already created, then angular inject the same
  constructor(private cartService: CartService) {
      console.log("CartComponent created")
   }

  ngOnInit(): void {
  }

  addItem() {
    const id = Math.ceil(Math.random() * 1000000)
    const price = Math.ceil(Math.random() * 1000)
    const qty = Math.ceil(Math.random() * 10)

    const item = new CartItem(id, `Product ${id}`, price, qty)
    this.cartService.addItem(item)
  }

  empty() {
    this.cartService.empty()
  }

}
