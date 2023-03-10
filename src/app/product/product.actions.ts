import { createAction, props } from '@ngrx/store';
import { Product } from '../core/model/product.model';

export enum ProductActionTypes {
  LoadProducts = '[Product] Load Products',
  ProductsLoadedSuccess = '[Product] Products Loaded Success',
}

export const loadProducts = createAction(ProductActionTypes.LoadProducts);

export const productsLoadedSuccess = createAction(
  ProductActionTypes.ProductsLoadedSuccess,
  props<{ products: Product[] }>()
);
