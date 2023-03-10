import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  product = new FormGroup({
    name: new FormControl(''),
    inInventory: new FormControl(0),
    enabled: new FormControl(false),
    min: new FormControl(0),
    max: new FormControl(0),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }

  onSubmit() {
    console.debug(this.product.value);
  }
}
