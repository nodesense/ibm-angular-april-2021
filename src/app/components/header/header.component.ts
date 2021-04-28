import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  amount$: Observable<number>;
   
  constructor(private cartService: CartService) {
    console.log('HeaderComponent Created')
    this.amount$ = this.cartService.amount$;
    // susbcribe shall done by async in view 
   }

  ngOnInit(): void {
  }

}
