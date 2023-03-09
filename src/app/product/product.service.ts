import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = process.env['API_URL'];

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.apiUrl + '/product');
  }
}
