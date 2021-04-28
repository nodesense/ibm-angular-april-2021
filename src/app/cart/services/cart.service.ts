import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

import {Observable, Subject, BehaviorSubject} from 'rxjs';

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

  // whenever amount,totalItems, cartItems is changed, publish it
  // behavioursubject shall publish as soon some consumer subscribe it
  // it won't wait for .next to be called, it maintain last known value
  amount$: Subject<number> = new BehaviorSubject<number>(this._amount);
  totalItems$: Subject<number> = new BehaviorSubject<number>(this._totalItems);
  cartItems$: Subject<CartItem[]> = new BehaviorSubject<CartItem[]> (this._cartItems);

  get amount() {
    return this._amount;
  }

  get totalItems() {
    return this._totalItems;
  }

  get cartItems() {
    return this._cartItems
  }

  // this.amount = 100, this setter is invoked
  set amount(value: number) {
    if (value >= 0) {
      this._amount = value;
      // publish the changes to subscriber
      this.amount$.next(this._amount)
    }
  }

  set totalItems(value: number) {
    if (value >= 0) {
      this._totalItems = value;
      // publish the changes to subscriber
      this.totalItems$.next(this._totalItems)
    }
  }

  // this.cartItems = []
  set cartItems(value: CartItem[]) {
      this._cartItems = value;
      // publish the changes to subscriber
      this.cartItems$.next(this._cartItems)
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

     this.amount = amount; // this will call set amount, also publish the data
     this.totalItems = total; // this will call set totalItems, also publish the data

     console.log("amount ", amount)
     console.log("_totalItems ", total)
   }

   addItem(item: CartItem) {
     // mutation, will cause problem for pure pipe
     // this._cartItems.push(item)
     // immutation, good
     this.cartItems = [...this._cartItems, item]    // setter, publish the values
     this.calculate();
   }

   empty() {
     // mutation
     // this._cartItems.splice(0, this._cartItems.length);
     this.cartItems = [] ; // assign new array, call setter, publish the changed values
     this.calculate();
   }
}
