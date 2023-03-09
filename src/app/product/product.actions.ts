import { createAction, props } from '@ngrx/store';
import { Product } from '../core/model/product.model';

export enum ProductActionTypes {
  LoadProducts = '[Product] Load Products',
}

export const loadProducts = createAction(
  ProductActionTypes.LoadProducts,
  props<{ products: Product[] }>()
);
