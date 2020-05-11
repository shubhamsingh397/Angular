import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/products';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl = 'http://localhost:8888/ecommConsumer/api/products';
  constructor(private httpClient: HttpClient) { }
  getProductList(theCategoryId: number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/findByCategoryId?id=${theCategoryId}`;
    return this.httpClient.get<Product[]>(searchUrl);/*.pipe(
      map(response => response._embedded.products)
    );*/
  }
}
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
