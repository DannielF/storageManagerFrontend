import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  product: FormGroup = new FormGroup({});

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());
    this.product = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ]),
      inInventory: new FormControl(0, [Validators.required, Validators.min(1)]),
      enabled: new FormControl(false, [Validators.required]),
      min: new FormControl(0, [Validators.required, Validators.min(1)]),
      max: new FormControl(0, [Validators.required, Validators.min(2)]),
    });
  }

  onSubmit() {
    const newProduct: Product = {
      name: this.product.get('name')?.value,
      inInventory: this.product.get('inInventory')?.value,
      enabled:
        this.product.get('enabled')?.value.toLowerCase() === 'true'
          ? true
          : false,
      min: this.product.get('min')?.value,
      max: this.product.get('max')?.value,
    };
    this.store.dispatch(ProductActions.createProduct({ payload: newProduct }));
  }

  get name() {
    return this.product.get('name');
  }
  get inInventory() {
    return this.product.get('inInventory');
  }
  get enabled() {
    return this.product.get('enabled');
  }
  get min() {
    return this.product.get('min');
  }
  get max() {
    return this.product.get('max');
  }
}
