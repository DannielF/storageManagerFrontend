import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  /**
   * Get all products
   *@returns Product[]
   * version 1.0.0
   * author: dannielf
   */
  getAllProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/product`);
  }
  /**
   * Create a new product
   * @param product Product
   * @returns Product
   * version 1.0.0
   * author: dannielf
   */
  createProduct(product: Product) {
    return this.http.post<Product>(`${this.apiUrl}/product`, product);
  }
}
