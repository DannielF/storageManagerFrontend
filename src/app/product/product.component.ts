import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../core/model/product.model';
import * as ProductActions from './product.actions';
import * as ProductSelectors from './product.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]> = this.store.select(
    ProductSelectors.getProducts
  );
  displayedColumns: string[] = [
    'id',
    'name',
    'inInventory',
    'enabled',
    'min',
    'max',
  ];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }
}
