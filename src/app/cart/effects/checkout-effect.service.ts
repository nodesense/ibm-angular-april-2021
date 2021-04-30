// checkout-effect.service.ts
import { Injectable } from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import { CheckoutService } from '../service/checkout.service';
import { CartService } from '../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutEffectService {

  constructor(private actions$: Actions, 
              private checkoutService: CheckoutService, 
              private cartService: CartService) {

    console.log("Effect service created");
    this.actions$.pipe(
      ofType ('[Cart] checkout'), // filter only allow actions of certain type
      map( (action: any) => {
        console.log("checkout action ", action);

        // async code, this is why we need effect
        this.checkoutService.postOrder(action.order)
            .subscribe ( (result) => {
              console.log("posted order ", result)
              this.cartService.empty(); // side effect
            })

        return action;
      })
    )
    .subscribe( () => {
       console.log("Subscribe")
    })

   }

   
}
