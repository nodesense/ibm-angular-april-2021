// checkout.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from 'src/app/models/favorite';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(private http: HttpClient) { }
  
  postOrder(order: Order):Observable<Order> {
    return this.http
                 .post<Order>(`${environment.apiEndPoint}/api/orders`, order)
     
  }

  postFavorites(favorites: Favorite[]):Observable<Order> {
    const favList = {favorites} //es6 favorites:favorites

    return this.http
                 .post<Order>(`${environment.apiEndPoint}/api/favorites`, favList)
     
  }
}
