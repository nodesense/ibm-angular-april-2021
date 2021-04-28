import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
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

  
  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${environment.apiEndPoint}/api/brands`)
  }

  
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiEndPoint}/api/products/${id}`)
  }

  // POST to create new product
  // PUT to update existing product
  // DELETE to delete product

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiEndPoint}/api/products/${id}`)
  }

  saveProduct(product: Product):Observable<Product> {
    if (product.id) { // product already exist, update it using put method
      return this.http
                 .put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`, product)
    } else { // create new product
      return this.http
                 .post<Product>(`${environment.apiEndPoint}/api/products`, product)
    }
  }

  searchProducts(q: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products?q=${q}`)
  }

}
