import { createAction, props } from '@ngrx/store';
import { Product } from '../core/model/product.model';

export enum ProductActionTypes {
  LoadProducts = '[Product] Load Products',
  ProductsLoadedSuccess = '[Product] Products Loaded Success',
  CreateProduct = '[Product] Create Product',
  CreateProductSuccess = '[Product] Create Product Success',
}

export const loadProducts = createAction(ProductActionTypes.LoadProducts);

export const productsLoadedSuccess = createAction(
  ProductActionTypes.ProductsLoadedSuccess,
  props<{ payload: Product[] }>()
);

export const createProduct = createAction(
  ProductActionTypes.CreateProduct,
  props<{ payload: Product }>()
);

export const createProductSuccess = createAction(
  ProductActionTypes.CreateProductSuccess,
  props<{ payload: Product }>()
);
