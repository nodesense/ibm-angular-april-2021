import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

/*
1. Implement a business logic
2. Implement API interaction with web services
3. If we have the data in the component, when we delete the component, data shall be lost,
   services can be in memory, even components destroyed

4. Services are useful to store application state

5. Input/Output, helps to share data with immediate parent/child, limited. 
   Using service, we can share data with any component

6. service objects are created lazily when used first time

7. services are singleton by default
*/

@Injectable({
  // throughout the application
  providedIn: 'root'
})
export class CartService {

  private _amount: number = 0;
  private _totalItems: number = 0;
  private _cartItems: CartItem[] = [];

  get amount() {
    return this._amount;
  }

  get totalItems() {
    return this._totalItems;
  }

  get cartItems() {
    return this._cartItems
  }

  constructor() {
      console.log('CartService Created')
   }

   calculate() {
     let amount = 0, total = 0;
     for (let item of this._cartItems) {
       amount += item.price * item.qty;
       total += item.qty
     }

     this._amount = amount;
     this._totalItems = total;
     console.log("amount ", amount)
     console.log("_totalItems ", total)
   }

   addItem(item: CartItem) {
     this._cartItems.push(item)
     this.calculate();
   }

   empty() {
     this._cartItems.splice(0, this._cartItems.length);
     this.calculate();
   }
}
