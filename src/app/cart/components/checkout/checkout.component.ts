import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Favorite } from 'src/app/models/favorite';
import { checkout } from '../../actions/checkout.actions';
import { Order } from '../../models/order';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private store: Store<{favorites: Favorite[]}>, 
              private cartService: CartService) { }

  ngOnInit(): void {
  }

  checkout() {
    const order = new Order()
    order.name = 'someone'
    order.email = 'someone@example.com'
    order.items = this.cartService.cartItems;
    
    const action = checkout({order: order})
    this.store.dispatch(action)

    // dispatch checkout action, we expect the effect to be called
  }

}
