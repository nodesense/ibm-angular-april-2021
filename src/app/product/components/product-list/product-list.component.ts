import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/cart/models/cart-item';
import { CartService } from 'src/app/cart/services/cart.service';
import { Favorite } from 'src/app/models/favorite';
import { addFavorite } from 'src/app/state/actions/favorite.actions';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  subscription: Subscription;

  constructor(private productService: ProductService, 
              private cartService: CartService, 
              private store: Store<{favorites: Favorite[]}> ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  ngOnDestroy() {
    console.log("ProductList onDestroy")
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe(); // abort the pending call if any
    }
  }

  fetchProducts() {
    this.subscription = this.productService.getProducts()
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

  addToFavorite(product: Product){
    const fav = new Favorite(product.id, product.name)
    // dispatch an event/action to store
    // whenever we dispatch, it calls reducer, returned state from reducer is maintained by store
    
    const action = addFavorite({favorite: fav})
    console.log("dispatching an action ", action)
    // now reducer shall be callled
    // reducer(state, action), state is taken  from store, action is from dispatch
    this.store.dispatch(action)
  }
}
