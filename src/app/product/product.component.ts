import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../core/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]> = this.store.select(
    (state) => state.products
  );

  constructor(private store: Store<{ products: Product[] }>) {}

  ngOnInit(): void {
    this.store.dispatch({ type: '[Product] Load Products' });
  }
}
