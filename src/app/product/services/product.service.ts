import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

// We are using service  to make API call
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 // HttpClient rxjs based, ajax client to make api calls, GET, PUT/POST, DELETE
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products`)
  }
}
