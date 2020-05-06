import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/products';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl = 'http://localhost:8080/api/products';
  constructor(private httpClient: HttpClient) { }
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl)
  }
}
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
