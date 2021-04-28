import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  items: CartItem[];
  constructor(private cartService: CartService) {
     // this.items = this.cartService.cartItems // this calls get cartItems()
  }

  ngOnInit(): void {
    this.cartService.cartItems$
                    .subscribe ( (items: CartItem[]) => {
                      console.log("CarTItems changed, ", items);
                      this.items = items;
                    })

  }

}
